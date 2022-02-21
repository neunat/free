import turtle as t
t.rt(30)
t.fillcolor('pink')
for i in range(5):
  t.begin_fill()
  t.circle(30, 120)
  t.lt(60)
  t.circle(30, 120)
  t.lt(90)
  t.end_fill()