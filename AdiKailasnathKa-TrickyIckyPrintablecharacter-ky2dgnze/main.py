from pyleap import *                 
window.set_caption("my first game")

a = Circle(300,300,50,"blue")

def draw(dt):
  a.draw()

repeat(draw)
run()