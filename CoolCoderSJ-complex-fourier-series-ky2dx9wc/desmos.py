# This essentially uses Euler's Formula (e^iθ = cosθ + isinθ) to generate the Fourier series as a sum of sines and cosines instead of exponentials. It then takes the real part and sets that as an x coordinate, and the imaginary part as a y coordinate, and outputs a parametric equation which can be pasted into Desmos. This is how I viewed the output of the Fourier series before I wrote the image-generation code.
# Note - this will produce a gif that is upside-down compared to the image and gif outputs. This is because while Desmos has the origin in the middle and the y axis goes upwards, PIL (Python Imaging Library) has the origin in the top-left and the y axis goes downwards.
# This code also cleans up the equation a little, making the following replacements:
# "+-" --> "-"
# "--" --> "+"
# "1cos" --> "cos" (and same for sin)
# "1t" --> "t"
# "-1t" --> "-t"
# "cos(0t)" --> "1"
# "sin(0t)" --> "0"
# This results in a very nice, clean, and somewhat readable equation. I could have included spaces between each term to make it more readable, but Desmos was already struggling with longer series.
# This function outputs to output/equation.txt, and also to output/points.txt, which you can also copy into Desmos, and it shows the original points you specified, so you can compare how the Fourier series tends towards them.

def desmosify(points, series, precision):
  x = ""
  y = ""

  for n, c in series.items():
    a, b = c.real, c.imag

    if a != 0:
      a = f"{round(a, precision)}".rstrip("0").rstrip(".")
      if a == "1" and n != 0:
        a = ""
      if n == 0:
        x += f"+{a}"
      else:
        x += f"+{a}cos({n}t)"
        y += f"+{a}sin({n}t)"

    if b != 0:
      b = f"{round(b, precision)}".rstrip("0").rstrip(".")
      if b == "1" and n != 0:
        b = ""
      if n == 0:
        y += f"+{b}"
      else:
        x += f"-{b}sin({n}t)"
        y += f"+{b}cos({n}t)"

  clean = lambda f: (f[1:]
    .replace("+-", "-")
    .replace("--", "+")
    .replace("(1t)", "(t)")
    .replace("(-1t)", "(-t)")
  )

  x = clean(x)
  y = clean(y)

  with open("outputs/points.txt", "w") as f:
    points_xy = [(z.real, z.imag) for z in points.values()]
    f.write(str(points_xy + [points_xy[0]]).replace(" ", ""))

  with open("outputs/equation.txt", "w") as f:
    f.write(f"({x},{y})")