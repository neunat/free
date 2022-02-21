import os, time, sys, threading
from getkey import getkey, keys
from extras import Cursor, OptionList, format_time
from colored import fg, attr


class Game:
    active = False
    fps = 30
    levels = []
    level = None
    level_index = 0
    level_start_time = 0
    time_paused = 0
    timer_panel = ""
    suppress_input = False
    updated = True
    
    def start():
        for i, name in enumerate(sorted(os.listdir('levels'))):
            level = Level('levels/' + name)
            level.title = f"Level {i + 1}: {level.name}"
            level.parse()
            Game.levels.append(level)
        Game.menu()
        # start threads
        threading.Thread(target=Game.stopwatch, daemon=False).start()
        # threading.Thread(target=Game.get_input, daemon=False).start()
        # Game.draw_screen()
        threading.Thread(target=Game.draw_screen, daemon=False).start()
        Game.get_input()

    def draw_screen(resume_countdown=False, seconds=3):
        last_update = time.time()
        while True:
            if time.time() - last_update < 1/Game.fps:
                time.sleep(1/Game.fps - (time.time() - last_update))
            if Game.updated and Game.active or resume_countdown:
                screen = attr('bold') + Game.level.title + attr('reset') + "\n"
                left = "⏸️  ESC" if not resume_countdown else f"⏳:{seconds:0>2}"
                right = Game.timer_panel
                screen += (fg(1) if resume_countdown else '') + left + attr('reset') + " " * (Game.level.width*2 - len(left) - len(right) - int(resume_countdown)*2) + right + "\n"
                screen += "\n".join(Game.level.image())
                # display inventories
                screen += "\nItems" + (": " if len(Player.players()) == 1 else "") + fg(250)
                for player in Player.players():
                    screen += ("\n" + player.symbol + ": " if len(Player.players()) > 1 else '') + ("".join(item.symbol for item in player.inventory) if player.inventory else "None")
                screen += attr('reset')
                os.system("clear")
                print(screen)
                Game.updated = False
            if resume_countdown: 
                time.sleep(1)
                if seconds > 1:
                    Game.draw_screen(True, seconds - 1)
                break
            last_update = time.time()

    def get_input():
        last_input = time.time()
        while True:
            if Game.active or Game.suppress_input:
                key = getkey()
            if Game.active:
                if time.time() - last_input < 1/Game.fps:
                    time.sleep(1/Game.fps - (time.time() - last_input))
                if key == keys.ESC:
                    Game.pause()
                else:
                    for player in Player.players():
                        player.handle_input(key)

    def start_level(index):
        Game.active = False
        Game.level_index = index
        Game.level = Game.levels[index]
        Game.level.parse()
        Game.active = True
        Game.updated = True
        Game.level_start_time = time.time()

    def stopwatch():
        clocks = "🕛🕒🕕🕘"
        i = 0
        last_elapsed = None
        while True:
            if Game.active:
                elapsed = int(time.time() - Game.level_start_time - Game.time_paused)
                if elapsed != last_elapsed:
                    last_elapsed = elapsed
                    Game.timer_panel = clocks[i % len(clocks)] + " " + format_time(elapsed)
                    Game.updated = True
                    i += 1
            time.sleep(1/Game.fps)

    def menu():
        os.system("clear")
        with open("logo.txt") as logo:
            print(logo.read())
        print("By Brandon Troy")
        print()
        OptionList([
            OptionList.Option("▶️ ", "Start", [Game.start_level, (0,), {}]),
            OptionList.Option("🗺️ ", "Level Select", [Game.level_select, (), {}]),
            OptionList.Option("📜", "How to Play", [Game.start_level, (0,), {}]),
            OptionList.Option("⚙️ ️", "Settings", [Game.start_level, (0,), {}]),
            OptionList.Option("❌", "Quit", [sys.exit, ("Thanks for playing!",), {}])
        ]).get_input()

    def level_select(index=0, option_index=0):
        os.system("clear")
        level = Game.levels[index]
        print(attr('bold') + level.title + attr('reset'))
        if level.completed:
            print("\n".join(level.image()))
            left = "✅ Complete"
            right = "⏱️  " + format_time(level.time, miliseconds=True)
            #print(fg(2) + left + attr('reset') + " " * (level.width * 2 - len(left) - len(right)) + right)
            print(fg(2) + left + attr('reset') + " | " + right)
            #print("⏱️  Best - " + fg(2) + format_time(level.time, miliseconds=True) + attr('reset'))
        else:
            print(level.preview)
            print(fg(1) + "⛔ Incomplete" + attr('reset') + " | ⏱️  N/A")
        print()
        OptionList([
            OptionList.Option("▶️ ", "Play", [Game.start_level, (index,), {}]),
            OptionList.Option("️️️⏪", "Previous", [Game.level_select, ((index - 1) % len(Game.levels),), {"option_index": 1}]),
            OptionList.Option("️️️⏩", "Next", [Game.level_select, ((index + 1) % len(Game.levels),), {"option_index": 2}]),
            OptionList.Option("🌐", "Main Menu", [Game.menu, (), {}])
        ], starting_index = option_index).get_input()
        
    def settings():
        pass

    def pause():
        paused = time.time()
        Game.active = False
        time.sleep(1/Game.fps)
        os.system("clear")
        print(attr('bold') + Game.level.title + attr('reset'))
        print(fg(1) + "PAUSED" + attr('reset') + " - " + Game.timer_panel + "\n")
        OptionList([
            OptionList.Option("▶️ ", "Resume", [Game.resume, (paused,), {}]),
            OptionList.Option("🔁", "Restart", [Game.start_level, (Game.level_index,), {}]),
            OptionList.Option("🌐", "Main Menu", [Game.menu, (), {}])
        ]).get_input()

    def resume(paused=time.time()):
        Game.suppress_input = True
        Game.draw_screen(resume_countdown=True)
        Game.suppress_input = False
        Game.time_paused += time.time() - paused
        Game.active = True
        Game.updated = True

    def level_complete(_time, best):
        Game.active = False
        Game.level.parse()
        highscore = best == None or _time < best
        os.system("clear")
        print(attr('bold') + Game.level.title + attr('reset'))
        print(fg(2) + "✅ COMPLETED" + attr("reset"))
        print("⏱️  Time - " + format_time(_time, miliseconds=True))
        if not highscore:
            print("⏱️  Best - " + format_time(best, miliseconds=True))
        if highscore:
            print("⏱️  Prev - " + (format_time(best, miliseconds=True) if best else "None"))
            print(fg(13) + "🎉 New Best Time!" + attr('reset'))
        print()
        OptionList([
            OptionList.Option("️️️⏩", "Next Level", [Game.start_level, (Game.level_index + 1,), {}]),
            OptionList.Option("🔁", "Retry", [Game.start_level, (Game.level_index,), {}]),
            OptionList.Option("🌐", "Main Menu", [Game.menu, (), {}])
        ]).get_input()



class Settings:
    auto_retry = False



class Entity:   
    """Base class for all objects represented in a level. 
    'x' and 'y' are positional indicies of the entity in the level grid matrix.
    'sorting_order' is the level that the entity is rendered in if multiple entities are on the same tile, with lower numbers having priority"""
    entities = {}
    current_level = None
    
    def __init__(self, x, y, symbol=None, sorting_order=0):
        self.x = x
        self.y = y
        self.symbol = symbol or type(self).symbol
        self.sorting_order = sorting_order
        if type(self) in Entity.entities:
            Entity.entities[type(self)].append(self)
        else:
            Entity.entities[type(self)] = [self]
    
    def set_position(self, x, y, call_try_enter_events=True, call_enter_events=True, call_exit_events=True, call_move_events=True, new=False):
        if call_try_enter_events:
            if not all(entity.on_entity_try_enter(self) for entity in Entity.current_level.grid[y][x]): 
                return False
        if not new:
            Entity.current_level.grid[self.y][self.x].remove(self)
        Entity.current_level.grid[y][x].append(self)
        prev_x = self.x
        prev_y = self.y
        self.x = x
        self.y = y
        if call_enter_events:
            for entity in Entity.current_level.grid[y][x]:
                if entity is not self: 
                    entity.on_entity_enter(self, prev_x, prev_y)
        if call_exit_events and not new:
            for entity in Entity.current_level.grid[prev_y][prev_x]:
                entity.on_entity_exit(self)
        if call_move_events:
            for _type in Entity.entities:
                for entity in Entity.entities[_type]:
                    entity.on_entity_move(self, prev_x, prev_y)
        Game.updated = True
        return True

    def destroy(self):
        try: Entity.entities[type(self)].remove(self)
        except: pass
        Entity.current_level.grid[self.y][self.x].remove(self)

    def on_entity_move(self, entity, prev_x, prev_y):
        pass
    
    def on_entity_try_enter(self, entity):
        return True

    def on_entity_enter(self, entity, prev_x, prev_y):
        pass
    
    def on_entity_exit(self, entity):
        pass
    
    def is_type_at(x, y, *types):
        for entity in Entity.current_level.grid[y][x]:
            for _type in types:
                if isinstance(entity, _type):
                    return True
        return False

    def reset():
        for group in Entity.entities.values():
            for entity in group:
                entity.destroy()



class EntityTag:
    """Base class for entity tags, which add additional classifications to entities. Tag classes do not inherit from Entity"""

    class Opaque:
        """A laser beam cannot pass through these objects"""
    
    class Pusher:
        """Can push entities of instance 'Pushable'"""



class EntityType:
    """Base class for entity sub-types that add additional funtionality to entities. All types inherit from Entity"""
    
    class NonEnterable(Entity):
        """Other entities cannot enter the same tile"""

        def on_entity_try_enter(self, entity):
            return False


    class Pushable(Entity, EntityTag.Pusher):
        """Can be pushed by entities of instance 'Pusher'"""       

        def get_new_position(self, pusher_prev_x, pusher_prev_y):
            dir_x = self.x - pusher_prev_x
            dir_y = self.y - pusher_prev_y
            return self.x + dir_x, self.y + dir_y

        def on_entity_try_enter(self, entity):
            if isinstance(entity, EntityTag.Pusher):
                x, y = self.get_new_position(entity.x, entity.y)
                if all(other.on_entity_try_enter(self) for other in Entity.current_level.grid[y][x]):
                    Entity.set_position(self, *self.get_new_position(entity.x, entity.y))
                    return True
            return False

    
    class Item(Entity):
        """Can be picked up and stored/used by the player"""
        def __init__(self, *args, max_count=1, uses=1, **kwargs):
            super().__init__(*args, **kwargs)
            self.max_count = max_count
            self.uses = uses
            self.owner = None

        def on_entity_enter(self, entity, prev_x, prev_y):
            if isinstance(entity, Player):
                self.on_pickup(entity)
        
        def on_pickup(self, entity):
            if len(list(filter(lambda item: type(item) == type(self), entity.inventory))) >= self.max_count:
                return
            entity.inventory.append(self)
            self.owner = entity
            self.destroy()

        def use(self):
            self.uses -= 1
            if self.uses == 0:
                self.owner.inventory.remove(self)



# entities ------------------------
class Player(Entity, EntityTag.Pusher):
    symbols = ["😄", "😇", "🥰", "🤪", "🤑", "😴", "😉", "🥴"]
    keybind_schemes = {
        "up": ['w', keys.UP, 'i'],
        "down": ['s', keys.DOWN, 'k'],
        "left": ['a', keys.LEFT, 'j'],
        "right": ['d', keys.RIGHT, 'l']
    }

    def __init__(self, *args):
        super().__init__(*args, symbol=Player.symbols[len(Player.players())])
        self.keybinds = {}
        for (_type, _keys) in Player.keybind_schemes.items():
            self.keybinds[_type] = _keys[len(Player.players()) - 1]
        self.inventory = []
        self.can_move = True    

    def handle_input(self, key):
        if not self.can_move: return
        if key == self.keybinds["up"]:
            self.move(0, -1)
        elif key == self.keybinds["down"]:
            self.move(0, 1)
        elif key == self.keybinds["left"]:
            self.move(-1, 0)
        elif key == self.keybinds["right"]:
            self.move(1, 0)
        
    def move(self, offset_x, offset_y):
        Entity.set_position(self, self.x + offset_x, self.y + offset_y)

    def players():
        return Entity.entities[Player] if Player in Entity.entities else []

    
class Enemy(Entity):
    symbol = "👽"


class Box(EntityType.Pushable):
    symbols = {"red": "🟥", "blue": "🟦", "green": "🟩"}

    def __init__(self, *args, color):
        super().__init__(*args, symbol=Box.symbols[color])
        self.color = color


class Sensor(Entity):
    symbols = {"red": "🔴", "blue": "🔵", "green": "🟢"}

    def __init__(self, *args, color):
        super().__init__(*args, symbol=Sensor.symbols[color])
        self.color = color
        self.activator = None
        self.target = None
        Level.on_loaded_callbacks.append(self.find_connections)

    def on_entity_enter(self, entity, *args):
        if isinstance(entity, Box):
            if entity.color == self.color:
                self.target.open()

    def on_entity_exit(self, entity):
        if isinstance(entity, Box):
            if entity.color == self.color:
                self.target.close()

    def find_connections(self):
        for entity in Entity.entities[Box]:
            if entity.color == self.color:
                self.activator = entity
                break
        for entity in Entity.entities[LinkedDoor]:
            if entity.color == self.color:
                self.target = entity
                break


class Portal(Entity):
    symbol = "🌀"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if not Portal.connect_portals in Entity.current_level.on_loaded_callbacks:
            Entity.current_level.on_loaded_callbacks.append(Portal.connect_portals)

    def on_entity_try_enter(self, entity):
        x = self.target.x + self.x - entity.x
        y = self.target.y + self.y - entity.y
        # temporarily sets the position of the entity to that of the target portal
        # so the on_enity_try_enter calls have an accurate previous position
        prev_x, prev_y = entity.x, entity.y
        entity.x, entity.y = self.target.x, self.target.y
        result = all(other.on_entity_try_enter(entity) for other in Entity.current_level.grid[y][x])
        entity.x, entity.y = (prev_x, prev_y)
        return result

    def on_entity_enter(self, entity, prev_x, prev_y, suppress_callbacks=True):
        # move to other portal without calling enter events (so it doesnt immediately teleport)
        Entity.set_position(entity, self.target.x, self.target.y, call_try_enter_events=False,call_enter_events=False)
        # move in direction of entry
        Entity.set_position(entity, entity.x + self.x-prev_x, entity.y + self.y-prev_y)

    def connect_portals():
        if not Portal in Entity.entities:
            return
        portals = Entity.entities[Portal]
        for i, entity in enumerate(portals):
            entity.target = portals[(i+1) % len(portals)]


class Target(Entity):
    symbol = "🏆"

    def on_entity_enter(self, entity, prev_x, prev_y):
        if isinstance(entity, Player):
            entity.destroy()
            if len(Player.players()) == 0:
                Entity.current_level.complete()


class Key(EntityType.Item):
    symbol = "🗝️ "


class Door(EntityType.NonEnterable):    
    symbol = "🚪"

    # for now a player entering with a key will permanently open the door and
    # remove the key from the player, could be changed so that player can only go
    # through if they have a key and it stays in their inventory
    def on_entity_try_enter(self, entity):
        if isinstance(entity, Player):
            for item in entity.inventory:
                if type(item) == Key:
                    item.use()
                    self.destroy()
                    return True
        return False


class LinkedDoor(EntityType.NonEnterable):
    symbols = {"red": "📕", "blue": "📘", "green": "📗"}

    def __init__(self, *args, color):
        self.is_open = False
        self.closed_symbol = LinkedDoor.symbols[color]
        self.opened_symbol = "📖"
        self.color = color
        super().__init__(*args, symbol=self.closed_symbol)

    def open(self):
        self.symbol = self.opened_symbol
        self.is_open = True

    def close(self):
        self.symbol = self.closed_symbol
        self.is_open = False
    
    def on_entity_try_enter(self, entity):
        return self.is_open


class Wall(EntityType.NonEnterable):
    symbol = "⬜"


class LaserNode(EntityType.NonEnterable):
    symbols = {"up": " ╨", "down": " ╥", "right": "╞═", "left": "═╡"}
    color = fg(245)
    
    def __init__(self, *args, direction, **kwargs):
        super().__init__(*args, **kwargs, symbol=self.color + LaserNode.symbols[direction] + attr('reset'))
        Entity.current_level.on_loaded_callbacks.append(self.cast_beam)
        self.direction = direction
        self.vector = (1 if self.direction == "right" else -1 if self.direction == "left" else 0, -1 if self.direction == "up" else 1 if self.direction == "down" else 0)
        self.current_vector = self.vector
        self.beam = []        

    def cast_beam(self, start=None):
        for part in self.beam: 
            try:
                part.destroy()
            except:
                print(part, Entity.entities[LaserBeam], file=open("test","a"))
            else:
                print("success", file=open("test", "a"))
        self.beam = []
        
        pos = start or (self.x, self.y)
        self.current_vector = self.vector
        while True:
            part = LaserBeam(*pos, direction=("horizontal" if self.current_vector[1] == 0 else "vertical"), parent=self)
            pos = (pos[0] + self.current_vector[0], pos[1] + self.current_vector[1])
            if Entity.set_position(part, *pos, call_move_events=False, new=True):
                # call enter events
                for entity in Entity.current_level.grid[pos[1]][pos[0]]:
                    part.on_entity_enter(entity)
                self.beam.append(part)
            else: break
    
    def check_beam(self):
        intact = True
        i = 0
        while i < len(self.beam):
            part = self.beam[i]
            if intact and Entity.is_type_at(part.x, part.y, *LaserBeam.opaque_types):
                intact = False
            if not intact:
                self.beam.remove(part)
                Entity.current_level.grid[part.y][part.x].remove(part)
            else:
                i += 1
        if intact:
            last_pos = (self.beam[-1].x, self.beam[-1].y) if self.beam else (self.x, self.y)
            if not Entity.is_type_at(last_pos[0] + self.vector[0], last_pos[1] + self.vector[1], *LaserBeam.opaque_types):
                self.cast_beam(start=last_pos)

    def reset_beam(self):
        for part in self.beam:
            Entity.current_level.grid[part.y][part.x].remove(part)
        self.beam = []
            
    def on_entity_move(self, entity, prev_x, prev_y):
        self.cast_beam()


class LaserBeam(Entity):
    symbols = {"vertical": " ┆", "horizontal": "╌╌"}
    color = fg(196)
    opaque_types = [EntityType.NonEnterable, EntityType.Pushable]

    def __init__(self, *args, direction, parent, **kwargs):
        self.direction = direction
        self.parent = parent
        super().__init__(*args, **kwargs, symbol=LaserBeam.symbols[self.direction])
        self.symbol = self.color + self.symbol + attr('reset')

    def on_entity_enter(self, entity, *args, **kwargs):
        if isinstance(entity, Player):
            Game.start_level(Game.level_index)


class Mirror(EntityType.Pushable):
    symbols = {"up": " ▲", "down": " ▼", "right": " ▶", "left": " ◀", "up-right": " ◥", "up-left": " ◤", "down-right": " ◢", "down-left": " ◣", "all": " ◆"}

    def __init__(self, *args, direction, **kwargs):
        super().__init__(*args, **kwargs, symbol=Mirror.symbols[direction])
        self.direction = direction

    def on_entity_try_enter(self, entity):
        return super().on_entity_try_enter(entity) or isinstance(entity, LaserBeam)

    def on_entity_enter(self, entity, prev_x, prev_y):
        if isinstance(entity, LaserBeam):
            node = entity.parent
            def reflect(): 
                node.current_vector = (-node.current_vector[1], -node.current_vector[0])
                entity.destroy()
                
            
            if self.direction == "up-right":
                if node.current_vector in [(0, -1), (1, 0)]:
                    reflect()
            elif self.direction == "up-left":
                if node.current_vector in [(-1, 0), (-1, 0)]:
                    reflect()
            elif self.direction == "down-right":
                if node.current_vector in [(0, 1), (1, 0)]:
                    reflect()
            elif self.direction == "down-left":
                if node.current_vector in [(0, 1), (-1, 0)]:
                    reflect()



class Level:
    # {char: [Class, *args, **kwargs]}
    # x and y pos will be passed to constructor by default
    parse_key = {
        'P': [Player, (), {}],
        't': [Target, (), {}],
        'e': [Enemy, (), {}],
        'p': [Portal, (), {}],
        'w': [Wall, (), {}],
        'k': [Key, (), {}],
        'd': [Door, (), {}],
        'A': [Box, (), {"color": "red"}],
        'B': [Box, (), {"color": "blue"}],
        'C': [Box, (), {"color": "green"}],
        # 'a': [Sensor, (), {"color": "red"}],
        # 'b': [Sensor, (), {"color": "blue"}],
        # 'c': [Sensor, (), {"color": "green"}],
        # '1': [LinkedDoor, (), {"color": "red"}],
        # '2': [LinkedDoor, (), {"color": "blue"}],
        # '3': [LinkedDoor, (), {"color": "green"}],
        '^': [LaserNode, (), {"direction": "up"}],
        'v': [LaserNode, (), {"direction": "down"}],
        '<': [LaserNode, (), {"direction": "left"}],
        '>': [LaserNode, (), {"direction": "right"}],
        '1': [Mirror, (), {"direction": "up"}],
        '2': [Mirror, (), {"direction": "down"}],
        '3': [Mirror, (), {"direction": "right"}],
        '4': [Mirror, (), {"direction": "left"}],
        '5': [Mirror, (), {"direction": "up-right"}],
        '6': [Mirror, (), {"direction": "up-left"}],
        '7': [Mirror, (), {"direction": "down-right"}],
        '8': [Mirror, (), {"direction": "down-left"}],
        '9': [Mirror, (), {"direction": "all"}],
    }
    preview_key = {
        Player: "📌",#"📍",
        Target: "🏁",
        Wall: Wall.symbol,
    }
    permitted_nonentity_chars = [" "]
    space = "  "

    def __init__(self, filepath):
        self.name = filepath[filepath.index(">")+1:]
        with open(filepath) as file:
            self.text = file.read()
        self.completed = False
        self.time = None
        self.on_loaded_callbacks = []

    def image(self) -> list:
        lines = []
        for row in self.grid:
            lines.append("")
            for entities in row:
                # display last element with the lowest sorting order at each position
                symbol = (Level.space if len(entities) == 0 else
                    entities[0].symbol if len(entities) == 1 else
                    sorted(entities, key=lambda entity: entity.sorting_order,   reverse=True)[-1].symbol)
                lines[-1] += symbol
        return lines

    def parse(self):
        Entity.current_level = self
        Entity.entities = {}
        self.on_loaded_callbacks = []
        chars = [list(row) for row in self.text.split("\n")]
        self.width = max(len(row) for row in chars)
        self.height = len(chars)
        for row in chars:
            row += [" "] * (self.width - len(row))
        self.grid = [[list() for x in range(self.width)] for y in range(self.height)]
        for y, row in enumerate(chars):
            for x, char in enumerate(row):               
                if char in Level.parse_key:
                    constructor, args, kwargs = Level.parse_key[char]
                    self.grid[y][x].append(constructor(x, y, *args, **kwargs))
                elif char not in Level.permitted_nonentity_chars:
                    raise Exception(f"Invalid char '{char}' found in level file")
        self.on_loaded()
        self.preview = self.render_preview()
    
    def render_preview(self):
        preview = ""
        for row in self.grid:
            for point in row:
                if len(point) == 0:
                    preview += Level.space
                    continue
                t = type(point[0])
                if t in Level.preview_key:
                    preview += Level.preview_key[t]
                else:
                    preview += "❔"
            preview += '\n'
        return preview[:-1]   # removing the last newline character

    def complete(self):
        self.completed = True
        _time = time.time() - Game.level_start_time
        # completed "animation"
        # for target in Entity.entities[Target]:
        #     target.symbol = "🎊"
        # Game.updated = True
        # time.sleep(1)
        prev = self.time
        self.time = min(self.time, _time) if self.time else _time
        Game.level_complete(_time, prev)
        
    def on_loaded(self):
        for callback in self.on_loaded_callbacks:
            callback()


class Editor:
    level_state = ""

    def run(level_path):
        level = Level(level_path)
        while True:
            level.parse()
            os.system("clear")
            print(f"✏️  Level Editor: '{level_path}'\n")
            print("\n".join(level.image()))
            print("\nEditor key:")
            for char, constructor in Level.parse_key.items():
                params = ""
                if constructor[2]:
                    params = ": "
                    for param,val in constructor[2].items():
                        params += f"'{param}' = '{val}', "
                    params = params[:-2]

                print(f"'{char}' -> {constructor[0].__name__}" + params)
            time.sleep(0.5)
    


if __name__ == '__main__':
    # for live editor feedback, uncomment the following line
    # and add the name of the level file after 'levels/'
    #Editor.run("levels/0>Test")

    Cursor.showCursor(False)
    Game.start()