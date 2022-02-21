from collections import deque

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
    
    def move(self, pos):
        x, y = self.x, self.y

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

segs = deque([Pos(0, 0), Pos(0, 1)])

def visualize(segs):
    return '\n'.join([f'{seg.x},{seg.y}' for seg in segs])

while True:
    print(visualize(segs))
    head = segs[0].move(UP)
    segs.pop()
    segs.appendleft(head)
    input()