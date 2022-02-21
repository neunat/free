from pyleap import *
window.set_caption("Happy Mothers Day")
window.set_size(600,600)

bg = Sprite("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbBDasFdMePg-Q0_JviyKpBgwaOg7qPQKgA&usqp=CAU",300,300,600,600)
a = Text("Dear Mom,",193,501,50,"pink")
b = Text("Love You",188,392,40,"pink")
c = Rectangle(169,372,250,90,"black")
d = Sprite("https://www.pngkey.com/png/full/76-760892_red-heart-mothers-day-decoration-materials-happy-mother.png",177,485,250,90)
e = Rectangle(160,471,250,90,"black")
f = Sprite("https://www.pngkey.com/png/full/76-760892_red-heart-mothers-day-decoration-materials-happy-mother.png",159,471,50,50,)
g = Sprite("https://www.pngkey.com/png/full/76-760892_red-heart-mothers-day-decoration-materials-happy-mother.png",159,471,50,50)
h = Sprite("https://www.pngkey.com/png/full/76-760892_red-heart-mothers-day-decoration-materials-happy-mother.png",408,560,50,50)
i = Sprite("https://www.pngkey.com/png/full/76-760892_red-heart-mothers-day-decoration-materials-happy-mother.png",409,473,50,50)

def draw(dt):
  bg.draw()
  a.draw()
  b.draw()
  c.draw()
  d.draw()
  e.stroke()
  c.x = c.x+1
  e.y = e.y-1
  f.y = f.y-1
  g.y = g.y-1
  h.y = h.y-1
  i.y = i.y-1
  d.y = d.y-1
  if e.y<365:
    e.y = 365
  if f.y<453:
    f.y = 453
  if g.y<364:
    g.y = 364
  if h.y<453:
    h.y = 453
  if i.y<364:
    i.y = 364
  if d.y<0:
    e.y = 590         

repeat(draw)
run()