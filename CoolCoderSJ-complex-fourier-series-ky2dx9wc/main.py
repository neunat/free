# Get the path as a list of complex points - imagine dot-to-dot
from paths.N import points

# Define some stuff
terms = 3
precision = 0
output = "image"
image_width = 1000
stroke_width = 10
foreground = "white"
background = "black"

# Timer
from datetime import datetime
program_start = datetime.now()

from PIL import Image

from fourier import fourier
from desmos import desmosify
from pixels import pixelify
from image import imageify

# Convert the list of points to a mapping of {time: point} where time goes from 0 to 1
if isinstance(points, list):
  new_points = {}
  N = len(points)
  for i in range(N):
    point = points[i]
    new_points[i / N] = complex(*point) if isinstance(point, tuple) else point
  points = new_points

# Single image output
if output == "image":
  # Calculate the constants of the Fourier series
  constants = fourier(points, terms, precision)

  # Make desmos-friendly output (this was from before I wrote the code to generate an image)
  desmosify(points, constants, precision)

  # Scale the points as appropriate and save image
  pixels = pixelify(constants, image_width)
  imageify(*pixels, fg=foreground, bg=background, stroke_width=stroke_width).save("outputs/output.png")

# gif output
elif output == "gif":
  # Define which partial sums of the Fourier series will be used as "main frames"
  term_counts = [1, 2, 3, 4, 8, 10, 15, 25, 50, 400, 1000]

  # Define which positions between each frame will be the "transition frames" - this particular choice gives a nice easing motion, as it's a quadratic position-time function
  frames_between = [0, 0.05, 0.15, 0.3, 0.5, 0.7, 0.85, 0.95]

  # Generate the Fourier series and scaled points for the main frames
  main_frames = []
  for terms in term_counts:
    constants = fourier(points, terms, precision)
    pixels = pixelify(constants, image_width, border = 0.05)
    width, height = pixels[:2]
    main_frames.append(pixels[2])

  main_frames.append(main_frames[0])

  print("Generating gif...")

  # Generate the in-between frames
  frames = []
  durations = []
  for i in range(len(term_counts)):
    points_now = main_frames[i]
    points_next = main_frames[i+1]
    for j in frames_between:
      
      # Slide each point between its position in one main frame and its position in the next
      points_here = [
        (lambda c: (c.real, c.imag))
        (
          (complex(*points_next[k]) - complex(*points_now[k])) * j + complex(*points_now[k])
        ) for k in range(len(points_now))
      ]

      # Make the actual image for each transition frame
      img = imageify(width, height, points_here, fg=foreground, bg=background, stroke_width=stroke_width, n=i or j)
      frames.append(img)

      # Set the duration of that image in the gif depending on whether it's the final frame, a main frame or a transition frame
      if j == 0:
        if i == len(term_counts) - 1:
          durations.append(2000)
        else:
          durations.append(300)
      else:
        durations.append(10)

  mid = datetime.now()
  print("Time spent generating frames:", mid - program_start)

  print("Saving file...")

  # Save the file!
  frames[0].save(
    "outputs/output.gif",
    save_all=True,
    append_images=frames[1:],
    duration=durations,
    loop=0
  )

program_end = datetime.now()
print("Done!")
print("Total runtime: ", program_end - program_start)