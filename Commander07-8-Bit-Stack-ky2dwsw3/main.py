MEMORY = 65536 # 64 kb
BIT_RANGE = range(-127, 127) # 8 bit
BIT_LEN = len(BIT_RANGE)
START_SEQ = [5, 1, 0, 0, 0]
DEBUG_LEVEL = 10
def iterp(program):
  stack = [0 for i in range(MEMORY-len(START_SEQ))] # Allocate memory and account for the start sequence
  stack = START_SEQ + stack # Push start sequence into the first bytes
  sp = 0 # Stack pointer
  for line in program:
    for op in line.split():
      if op == ";": # comment
        break
      elif op == ">": # right
        sp = sp+1 % MEMORY
      elif op == "<": # left
        sp = sp-1 % MEMORY
      elif op == "+": # inc
        value = stack[sp]+1
        stack[sp] = BIT_RANGE[value+BIT_LEN//2 % BIT_LEN]
      elif op == "-": # dec
        value = stack[sp]-1
        stack[sp] = BIT_RANGE[value+BIT_LEN//2 % BIT_LEN]
      else: # NameError
        raise NameError(f"name '{op}' is not defined")
      print(stack[sp:sp+DEBUG_LEVEL], len(stack)) # Print out debug info about the stack

iterp([])