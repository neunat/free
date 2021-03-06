import utils

from datetime import datetime
from functools import wraps

all_commands = ['all', 'soon']
get_commands = ['g', 'get']
when_commands = ['w', 'when']
set_commands = ['s', 'set']


def start_chain(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        chain = f(*args, **kwargs)
        next(chain)
        return chain

    return wrapper


@start_chain
def default():
    msg_to_send = {'type': 'all', 'msg': None}
    while True:
        yield msg_to_send


@start_chain
def get_all(successor=None):
    msg_to_send = {'type': 'all', 'msg': None}
    while True:
        msg = yield msg_to_send
        msg_to_send['type'] = 'all'
        print(msg)
        if msg.length == 1 and msg.content[0] in all_commands:
            msg_to_send['msg'] = ''
            frozen = False
            dl = False
            edl = False
            raid = False
            timers = utils.get_all_timers()
            for boss, timer in timers.items():
                if timer is not None:
                    boss2 = None
                    if boss.isdigit():
                        boss2 = int(boss)
                    if not frozen and boss2 is not None and 110 <= boss2 <= 140 and utils.minutes_sub(
                            timer) >= -10:
                        frozen = True
                        msg_to_send['msg'] += utils.separator_label(
                            'frozen:', separator='')
                    elif not dl and boss2 is not None and 155 <= boss2 <= 180 and utils.minutes_sub(
                            timer) >= -10:
                        dl = True
                        msg_to_send['msg'] += utils.separator_label('dl:')
                    elif not edl and boss2 is not None and 185 <= boss2 <= 215 and utils.minutes_sub(
                            timer) >= -10:
                        edl = True
                        msg_to_send['msg'] += utils.separator_label('edl:')
                    elif not raid and boss2 is None:
                        raid = True
                        msg_to_send['msg'] += utils.separator_label('raid:')
                    if boss2 is None or utils.minutes_sub(timer) >= -10:
                        msg_to_send[
                            'msg'] += f'{boss}: {utils.minutes_to_dhm(timer)}\n'
            if len(msg_to_send['msg']) < 1:
                msg_to_send['msg'] = 'no timers found'
        elif successor is not None:
            msg_to_send = successor.send(msg)


@start_chain
def get_boss(successor=None):
    msg_to_send = {'type': 'all', 'msg': None}
    while True:
        msg = yield msg_to_send
        msg_to_send['type'] = 'all'
        if msg.length and msg.content[0] in get_commands:
            boss = msg.content[1]
            minutes = utils.get_timer(boss)
            if minutes is not None:
                msg_to_send['msg'] = utils.minutes_to_dhm(minutes)
            else:
                msg_to_send['msg'] = f'{boss} no timer set'
        elif successor is not None:
            msg_to_send = successor.send(msg)


@start_chain
def set_timer(successor=None):
    msg_to_send = {'type': 'all', 'msg': None}
    while True:
        msg = yield msg_to_send
        msg_to_send['type'] = 'all'
        if msg.length == 2:
            boss = msg.content[0]
            if msg.content[1].isdigit():
                timer = int(msg.content[1])
                if utils.set_timer(boss, timer):
                    if timer == 0:
                        msg_to_send['msg'] = f'{boss} timer deleted'
                    else:
                        msg_to_send['msg'] = f'{boss} set to {timer}m'
                else:
                    msg_to_send['msg'] = f'{boss} is not tracked'
            else:
                msg_to_send = successor.send(msg)
        elif successor is not None:
            msg_to_send = successor.send(msg)


@start_chain
def set_timer_2(successor=None):
    msg_to_send = {'type': 'all', 'msg': None}
    while True:
        msg = yield msg_to_send
        msg_to_send['type'] = 'all'
        if msg.length >= 3 and msg.content[0] in set_commands:
            boss = msg.content[1]
            timer = utils.days_hours_mins_to_mins(msg.content[2:])
            if utils.set_timer(boss, timer):
                if timer == 0:
                    msg_to_send['msg'] = f'{boss} timer deleted'
                else:
                    msg_to_send['msg'] = f'{boss} set to {timer}m'
            else:
                msg_to_send['msg'] = f'{boss} is not tracked'
        elif successor is not None:
            msg_to_send = successor.send(msg)


@start_chain
def reset_timer(successor=None):
    msg_to_send = {'type': 'all', 'msg': None}
    while True:
        msg = yield msg_to_send
        msg_to_send['type'] = 'all'
        if msg.length == 1:
            boss = msg.content[0]
            if boss in utils.BOSSES:
                default_timer = utils.BOSSES[boss]
                utils.set_timer(boss, default_timer)
                # session.reset_boss(boss)
                msg_to_send['msg'] = f'{boss} reset to {default_timer}m'
            else:
                msg_to_send['msg'] = f'{boss} is not tracked'
        elif successor is not None:
            msg_to_send = successor.send(msg)


@start_chain
def when_boss(successor=None):
    msg_to_send = {'type': 'all', 'msg': None}
    while True:
        msg = yield msg_to_send
        msg_to_send['type'] = 'all'
        if msg.length == 2 and msg.content[0] in when_commands:
            boss = msg.content[1]
            if boss in utils.BOSSES:
                timer = utils.get_timer(boss)
                if timer is not None:
                    msg_to_send[
                        'msg'] = f'{boss} due at {datetime.fromtimestamp(timer * 60)} gt'
                else:
                    msg_to_send['msg'] = f'{boss} no timer set'
            else:
                msg_to_send['msg'] = f'{boss} is not tracked'
        elif successor is not None:
            msg_to_send = successor.send(msg)
