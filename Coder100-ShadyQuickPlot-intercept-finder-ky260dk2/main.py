import re

p1 = input("enter coords for part 1: ")
p2 = input("enter coords for part 2: ")

try:
    [x1, y1] = [
        int(x)
        for x in re.search("((\d+),\s+(\d+))", p1)
            .groups()[1:]
    ]
    [x2, y2] = [
        int(x)
        for x in re.search("((\d+),\s+(\d+))", p2)
            .groups()[1:]
    ]

    dy = y2 - y1
    dx = x2 - x1

    m = dy / dx

    # x-intercept (x = 0)
    print(f"x-intercept: (0, {-m * x1 + y1})")
    # y-intercept (y = 0)
    print(f"y-intercept: ({x1 - y1 / m}, 0)")
except:
    print("invalid input")
    print("expected syntax: (a, b)")