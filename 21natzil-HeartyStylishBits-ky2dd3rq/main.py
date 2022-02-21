from PIL import Image

def get_concat_v(im1, im2):
    dst = Image.new('RGB', (im1.width, im1.height + im2.height))
    dst.paste(im1, (0, 0))
    dst.paste(im2, (0, im1.height))
    return dst

new_images = []
background = Image.open("New Year Celebration.png")
background2 = Image.open("New Year Celebration(1).png")
background = get_concat_v(background, background2)

animation = Image.open("animationsHappy_newyear.gif")
frame = 0
while True:
  frame_back = background.copy()
  try:
    animation.seek(frame)
  except EOFError:
    break
  smaller = animation.resize((540, 540))
  frame_back.paste(smaller)
  new_images.append(frame_back)
  print("Added frame!")
  frame += 1

new_images[0].save("finished3.webp", save_all=True, append_images=new_images[1:], optimize=False, duration=30, loop=0, quality=100, lossless=False, method=6)