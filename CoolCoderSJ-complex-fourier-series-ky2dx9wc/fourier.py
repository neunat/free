# This is the exciting bit - the actual Fourier series!

def fourier(points, terms, precision=4):
  from math import e, pi

  print(f"Calculating Fourier series with {2 * terms + 1} terms to {precision} decimal places...")

  # A function to round both paths of a complex number
  rnd = lambda z: complex(round(z.real, precision), round(z.imag, precision))

  times = list(points.keys()) + [1]
  pos = list(points.values())
  pos.append(pos[0])

  # Turn a set of points into a continuous function - f(t) is linear along each interval defined by the points.
  # Its derivative is discontinuous, but that doesn't matter for a numerical integration, and matters even less for what you'll see in a moment.
  def f(t):
    if t in points:
      return points[t]

    t %= 1
    n = 0
    while t > times[n]:
      n += 1

    time_gap = times[n] - times[n-1]
    pos_gap = pos[n] - pos[n-1]

    prop = (t - times[n-1]) / time_gap
    return pos[n-1] + prop * pos_gap

  # Calculate the nth constant of the series!!
  # With a normal function, you'd have to do an integral from 0 to 1 (the period of the function). This wouldn't work with our essentially piecewise function, but we can integrate over each interval instead and add the results.
  # Originally, my program did do this - it used scipy.integrate to integrate each interval. One minor problem with this was that the library couldn't handle a complex function, so I had to split it into real and imaginary parts.
  # However, the main problem was that it was SLOW. As in, SLOW SLOW.
  # But there's a solution! Remember, f(t) is linear along each interval. That means, we can actually compute the integral in terms of the endpoints, so  the program doesn't have to!
  # And guess what? This is FAST FAST!
  # The only minor issue is that we have to define c0 separately, as the calculation for the other constants involves dividing by n, but we can't divide by n when n=0, as that would be naughty.
  def c(n):
    g = lambda t: f(t) * e ** (-2j * pi * n * t)
    total = 0+0j
    for i in range(len(points)):
      t1 = times[i]
      t2 = times[i+1]
      A = f(t1)
      B = (f(t2) - f(t1)) / (t2 - t1)
      C = -2j * pi * n
      if C != 0:
        ect1 = e ** (C * t1)
        ect2 = e ** (C * t2)
        total += ( (A - B * t1) * (ect2 - ect1) + B * (t2 * ect2 - (ect2 - ect1) / C - t1 * ect1) ) / C
      else:
        total += A * (t2 - t1) - B * t1 * t2 + B * (t1**2 + t2**2) / 2

    return rnd(total)

  constants = {n: c(n) for n in range(-terms, terms + 1)}

  return constants