width = 1280
height = 720

main_box = Rect(0, 0, 820, 240)
timer_box = Rect(0, 0, 240, 240)
answer_box1 = Rect(0, 0, 495, 165)
answer_box2 = Rect(0, 0, 495, 165)
answer_box3 = Rect(0, 0, 495, 165)
answer_box4 = Rect(0, 0, 495, 165)

main_box.move_ip(50,40)
timer_box.move_ip(990,40)
answer_box1.move_ip(50,358)
answer_box2.move_ip(735,358)
answer_box3.move_ip(50,358)
answer_box4.move_ip(735,358)
answer_boxes=[answer_box1, answer_box2, answer_box3, answer_box4]

score=0
time_left=10

q1= ["What is the capitol of France?", "London", "Paris", "Berlin", "Tokyo", 2]

q2= ["What is 5+7?", "12", "10", "14", "8", 1]

q3= ["What is the seventh month of the year?", "May", "June", "July", "August", 3]

q4= ["What planet is closest to the sun?", "Neptune", "Venus", "Mercury", "Saturn", 3]

q5= ["Where are the pyramids?", "India", "Egypt", "Morocco", "Canada", 2]

questions=[q1,q2,q3,q4,q5]



screen=()
screen.fill("dim gray")
screen.draw.filled_rect(main_box, "sky blue")
screen.draw.filled_rect(timer_box, "sky blue")

for box in answer_boxes:
  screen.draw.filled_rect(box, "orange")
screen.draw.textbox(str(time_left), timer_box, colour=("black"))
screen.draw.textbox(questions[0], main_box, colour=("black"))

index = 1
for box in answer_boxes:
  screen.draw.textbox(questions[index], box, colour=("black"))
  index=index+1


def draw():
  pass

def game_over():
  global question, time_left
  message="game over. you got %s questions correct"% str(score)
  question=[message, "-", "-", "-", "-", 5]
  time_left=0
  

def correct_answer():
  pass

def on_mouse_down(pos):
  pass

def update_time_left():
  pass

