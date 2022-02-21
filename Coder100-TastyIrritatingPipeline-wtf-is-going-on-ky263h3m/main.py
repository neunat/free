# hopefully this code isn't too bad lol

from curses import wrapper
from collections import deque
from itertools import islice

import curses
import random
import time


UP    = 0
LEFT  = 1
DOWN  = 2
RIGHT = 3

WIDTH  = 20
HEIGHT = 10


class Pos:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    @staticmethod
    def rand():
        y = random.randint(0, WIDTH - 2)
        x = random.randint(0, HEIGHT - 2)

        hx, hy = segments[0].x, segments[0].y

        while y == hx and x == hy:
            y = random.randint(0, WIDTH - 2)
            x = random.randint(0, HEIGHT - 2)

        return Pos(x, y)
    
    def move(self, pos):
        x, y = self.x, self.y

        if s_dir == -1: return Pos(x, y) # game not started

        if pos == UP:
            y -= 1
        if pos == LEFT:
            x -= 1
        if pos == DOWN:
            y += 1
        if pos == RIGHT:
            x += 1
        
        if y < 0:
            y = HEIGHT - 2
        
        if x < 0:
            x = WIDTH - 2
        
        if x > WIDTH - 2:
            x = 0
        
        if y > HEIGHT - 2:
            y = 0
        
        return Pos(x, y)


s_dir = -1
segments = deque([
    Pos(WIDTH // 2 - 1, HEIGHT // 2 - 1)
])
apple = Pos.rand()


keys = {
    curses.KEY_UP   : UP,
    curses.KEY_LEFT : LEFT,
    curses.KEY_DOWN : DOWN,
    curses.KEY_RIGHT: RIGHT,

    119: UP,
    97 : LEFT,
    115: DOWN,
    100: RIGHT
}



def main(x):
    global s_dir, apple

    scr = curses.newwin(HEIGHT, WIDTH, 0, 0)

    curses.start_color()
    curses.use_default_colors()

    for i in range(0, curses.COLORS):
        curses.init_pair(i + 1, i, -1)

    curses.noecho()
    curses.cbreak()
    curses.curs_set(0)

    scr.timeout(50)

    scr.keypad(True)
    

    def bg():
        i = 0
        for y in range(0, WIDTH - 1):
            for x in range(0, HEIGHT - 1):
                scr.addstr(x, y, '-', curses.color_pair(242 if i % 2 == 0 else 252))
                i += 1

    def draw_snake():
        i = 0
        for seg in segments:
            scr.addstr(seg.y, seg.x, '#', curses.color_pair(29) if i == 0 else curses.color_pair(47))
            i += 1
        
    def draw_apple():
        scr.addstr(apple.x, apple.y, 'o', curses.color_pair(2))

    def draw_score():
        scr.addstr(HEIGHT - 1, 0, f'Score: {score}')


    def valid(pos):
        if s_dir == pos: return False

           # UP + DOWN / DOWN + UP
        if (s_dir + pos == 2 or
           # LEFT + RIGHT / RIGHT + LEFT
            s_dir + pos == 4): return False

        if s_dir + pos == 4: return False

        return True


    
    score = 0
    playing = True

    while playing:
        scr.getch()

        bg()
        
        time.sleep(.5)

wrapper(main)
print("done")