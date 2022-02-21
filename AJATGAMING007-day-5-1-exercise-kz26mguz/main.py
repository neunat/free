# 🚨 Don't change the code below 👇
student_heights = input("Input a list of student heights ").split()
for n in range(0, len(student_heights)):
  student_heights[n] = int(student_heights[n])
# 🚨 Don't change the code above 👆


#Write your code below this row 👇
total_heights = 0
for h in student_heights:
  total_heights += h

number_of_student_heights = 0
for n in student_heights:
  number_of_student_heights += 1

average_height = round(total_heights / number_of_student_heights)
print(average_height)

