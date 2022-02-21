# This function takes a set of Fourier series constants, an image width, a number of steps, and a border width, and outputs a set of scaled pixel values which need to be joined dot-to-dot to make the final image.

from math import e, pi

def pixelify(constants, width=1000, steps=2000, border=0.05):

  # This function is effectively the Fourier series, using the constants passed as an argument to the main function.
  def F(t):
    total = 0+0j
    for n, c in constants.items():
      total += c * e ** (2j * pi * n * t)
    return total

  # Calculate real and imaginary, or x and y, coordinates for each of 1000 points between t=0 and t=1. If the path were a very convoluted one, it might need more than 1000 points to end up with a nice curvy shape.
  x = []
  y = []
  for i in [j/steps for j in range(steps)]:
    point = F(i)
    x.append(point.real)
    y.append(point.imag)

  min_x = min(x)
  max_x = max(x)
  min_y = min(y)
  max_y = max(y)

  # Calculate the scaled size of the final image

  # Width  and height of the original points
  real_width = max_x - min_x
  real_height = max_y - min_y

  # Width of the final image (excluding border) - this is defined by the user
  scaled_width = width

  # Height of the final image (excluding border), scaled from the width so that the final image (excluding border) has the same aspect ratio as the original points
  scaled_height = scaled_width * real_height / real_width

  # Calculate border width
  border_width = border * width

  # Width and height of the final image, including border
  image_width = int(scaled_width + 2 * border_width)
  image_height = int(scaled_height + 2 * border_width)

  # A function which scales each x and y from the original points to their position on the image - luckily, PIL deals with non-integer coordinates (though not non-integer image sizes, hence int() above)
  scale = lambda x, y: (
    (x - min_x) / real_width * scaled_width + border_width,
    (y - min_y) / real_height * scaled_height + border_width
  )

  # Scale each point
  scaled_points = []
  for i in range(steps):
    scaled_points.append((scale(x[i], y[i])))

  return image_width, image_height, scaled_points