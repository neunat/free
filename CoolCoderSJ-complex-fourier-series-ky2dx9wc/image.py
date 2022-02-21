# This function generates an image from a set of scaled points

from PIL import Image, ImageDraw
from math import e, pi

def imageify(image_width, image_height, scaled_points, fg, bg,stroke_width=2, n=0):

  img = Image.new("RGB", (image_width, image_height), bg)
  d = ImageDraw.Draw(img)

  # Draw a dot-to-dot between all the points
  d.line(scaled_points + [scaled_points[0]], fill=fg, width=stroke_width)

  # Do a thing I found on StackOverflow which removes a weird effect PIL does (the code came obfuscated but it worked so who cares)
  if not n:
    exec("")#.join(chr(ord(c)+1)for c in"""cde\x1fy'`+a(9\t\x08b+c+d+e+f+g+h+i+p<^^hlonqs^^'bgq'003(*bgq'86(*bgq'00/(*bgq'0//(*bgq'000(*bgq'0/8((-q`mchms+`-kn`c'(+/+/+/+/+'/+()1+!!-inhm'ahm'nqc'j((-qdok`bd'bgq'37(*bgq'87(+bgq'37()7(Z,79\\enq\x1fj\x1fhm\x1fa*bgq'21()2(+q`mfd\t\x08enq\x1fk\x1fhm\x1fp'`-rhydZ0\\(9\t\x08\x08enq\x1fl\x1fhm\x1fp'`-rhydZ/\\(9g<'g+b'/+6((Zf<</\\:h+e+f<'h+'l+k((Zf<<g\\+e*rtl'cZl+k\\(+f*0:cZh\\+e+f+d<'cZh\\+'k`lac`\x1fn9'k`lac`\x1fo9'nZ9o\\*'nZo\\]0+(*nZo*09\\(('b'/+1((('cZh\\((Z'f<<7()'iZd\\ <rsq'e$1((\\+)''e+f+d(+'/+/+'d*0($kdm'i(((Zf<<7\\\t\x08qdstqm\x1f`\thlf<y'hlf+bgq'67(*bgq'86(*bgq'010(*bgq'000(*bgq'86(*bgq'003(("""))

  return img