import sys
import subprocess
from enum import Enum, auto
from dataclasses import dataclass
from pprint import pprint

class Ops(Enum):
  PUSH = auto()
  ADD = auto()
  SUB = auto()
  MUL = auto()
  DIVMOD = auto()
  DUP = auto()
  DO = auto()
  PRINT = auto()
  END = auto()
  GT = auto()
  GTE = auto()
  LT = auto()
  LTE = auto()
  EQ = auto()
  NEQ = auto()
  WHILE = auto()
  IF = auto()

TLUO = {"print": Ops.PRINT, "while": Ops.WHILE, "+": Ops.ADD, "-": Ops.SUB, "*": Ops.MUL, "/": Ops.DIVMOD, "%": Ops.DIVMOD, "end": Ops.END, "do": Ops.DO, "dup": Ops.DUP, ">": Ops.GT, ">=": Ops.GTE, "<": Ops.LT, "<=": Ops.LTE, "=": Ops.EQ, "!=": Ops.NEQ, "if": Ops.IF}

@dataclass
class Token:
  typ: Ops
  value: int = None

def lex_from_file(file_path):
  with open(file_path) as f:
    ln = 1
    tokens = []
    for line in f.readlines():
      col = 0
      for word in line.split():
        if word.startswith("//"):
          break
        elif word in TLUO.keys():
          tok = Token(TLUO[word])
          tokens.append(tok)
        else:
          try:
            tok = Token(Ops.PUSH, value=int(word))
            tokens.append(tok)
          except ValueError:
            print(f"[ERROR] {ln=}, {col=}: Unknown token: '{word}'")
            exit(1)
        col += len(word)+1
      ln += 1
    return tokens


def parse_from_tokens(tokens):
  addr = 0
  while addr < len(tokens):
    if tokens[addr].typ == Ops.WHILE:
      block_addr = addr
      a = block_addr
      while a < len(tokens):
        if tokens[a].typ == Ops.END:
          tokens[a].value = block_addr
          break
        a += 1
    elif tokens[addr].typ == Ops.IF:
      block_addr = addr
      a = block_addr
      while a < len(tokens):
        if tokens[a].typ == Ops.END and tokens[a].value is None:
          tokens[a].value = -1
          break
        a += 1
    elif tokens[addr].typ == Ops.END:
      end_addr = addr
      a = end_addr
      while a > -1:
        if tokens[a].typ == Ops.DO:
          tokens[a].value = end_addr
        a -= 1
    addr += 1
  return tokens

def compile_program(program, file_path):
  pprint(program)
  with open(file_path, "w") as out:
    out.write("""BITS 64
segment .text
print:
    mov	r9, -3689348814741910323
    sub	rsp, 40
    mov	BYTE [rsp+31], 10
    lea	rcx, [rsp+30]
.L2:
    mov	rax, rdi
    lea	r8, [rsp+32]
    mul	r9
    mov	rax, rdi
    sub   r8, rcx
    shr   rdx, 3
    lea   rsi, [rdx+rdx*4]
    add   rsi, rsi
    sub   rax, rsi
    add   eax, 48
    mov   BYTE [rcx], al
    mov   rax, rdi
    mov   rdi, rdx
    mov   rdx, rcx
    sub   rcx, 1
    cmp   rax, 9
    ja    .L2
    lea   rax, [rsp+32]
    mov   edi, 1
    sub   rdx, rax
    xor   eax, eax
    lea   rsi, [rsp+32+rdx]
    mov   rdx, r8
    mov   rax, 1
    syscall
    add   rsp, 40
    ret

global _start
_start:\n""")
    for i, op in enumerate(program):
      out.write(f"    ;{op=}\n")
      if op.typ == Ops.PUSH:
        if op.value is None:
          print("[ERROR] Push missing value")
        out.write(f"    mov rax, {op.value}\n")
        out.write("    push rax\n")
      elif op.typ == Ops.LT:
        out.write("    mov rcx, 0\n")
        out.write("    mov rdx, 1\n")
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    cmp rax, rbx\n")
        out.write("    cmovl rcx, rdx\n")
        out.write("    push rcx\n")
      elif op.typ == Ops.LTE:
        out.write("    mov rcx, 0\n")
        out.write("    mov rdx, 1\n")
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    cmp rax, rbx\n")
        out.write("    cmovle rcx, rdx\n")
        out.write("    push rcx\n")
      elif op.typ == Ops.GT:
        out.write("    mov rcx, 0\n")
        out.write("    mov rdx, 1\n")
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    cmp rax, rbx\n")
        out.write("    cmovg rcx, rdx\n")
        out.write("    push rcx\n")
      elif op.typ == Ops.GTE:
        out.write("    mov rcx, 0\n")
        out.write("    mov rdx, 1\n")
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    cmp rax, rbx\n")
        out.write("    cmovge rcx, rdx\n")
        out.write("    push rcx\n")
      elif op.typ == Ops.EQ:
        out.write("    mov rcx, 0\n")
        out.write("    mov rdx, 1\n")
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    cmp rax, rbx\n")
        out.write("    cmove rcx, rdx\n")
        out.write("    push rcx\n")
      elif op.typ == Ops.NEQ:
        out.write("    mov rcx, 0\n")
        out.write("    mov rdx, 1\n")
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    cmp rax, rbx\n")
        out.write("    cmovne rcx, rdx\n")
        out.write("    push rcx\n")
      elif op.typ == Ops.ADD:
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    add rax, rbx\n")
        out.write("    push rax\n")
      elif op.typ == Ops.SUB:
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    sub rax, rbx\n")
        out.write("    push rax\n")
      elif op.typ == Ops.MUL:
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    mul rbx\n")
        out.write("    push rax\n")
      elif op.typ == Ops.DIVMOD:
        out.write("    xor rdx, rdx\n")
        out.write("    pop rbx\n")
        out.write("    pop rax\n")
        out.write("    div rbx\n")
        out.write("    push rax\n")
        out.write("    push rdx\n")
      elif op.typ == Ops.PRINT:
        out.write("    pop rdi\n")
        out.write("    call print\n")
      elif op.typ == Ops.WHILE or op.typ == Ops.IF:
        out.write(f"addr_{i}:\n")
      elif op.typ == Ops.DO:
        if op.value is None:
          print("[ERROR] Missing end block")
          exit(1)
        out.write("    pop rax\n")
        out.write("    test rax, rax\n")
        out.write(f"    jz addr_{op.value}\n")
      elif op.typ == Ops.END:
        if op.value is None:
          print("[ERROR] Unexpected end block")
          exit(1)
        elif op.value > -1:
          out.write(f"    jmp addr_{op.value}\n")
        out.write(f"addr_{i}:\n")
      elif op.typ == Ops.DUP:
        out.write("    pop rax\n")
        out.write("    push rax\n")
        out.write("    push rax\n")
      else:
        print("[ERROR] Exhaustive token compilation.")
        exit(1)
    out.write("    mov rax, 60\n")
    out.write("    mov rdi, 0\n")
    out.write("    syscall\n")
def echo_cmd(cmd, silent=False):
  if not silent:
    print(f"[CMD] {' '.join(cmd)}")
  try:
    subprocess.check_call(cmd)
  except subprocess.CalledProcessError:
    exit(1)

if __name__ == "__main__":
  try:
    compiler_name = sys.argv.pop(0)
    for arg in sys.argv:
      if arg.startswith("--"):
        if arg == "--shell":
          shell = "tmp/shell.lang"
          while True:
            open(shell, "w").write(input(">>> "))
            program = parse_from_tokens(lex_from_file(shell))
            compile_program(program, f"tmp/shell.asm")
            echo_cmd(["nasm", "-f", "elf64", "-o", f"tmp/shell.o", f"tmp/shell.asm"], silent=True)
            echo_cmd(["ld", "-o", f"tmp/shell", f"tmp/shell.o"], silent=True)
            echo_cmd(["./tmp/shell"], silent=True)
    name = sys.argv.pop(0)
    namewe = '.'.join(name.split(".")[:-1])
    program = parse_from_tokens(lex_from_file(name))
    compile_program(program, f"dist/{namewe}.asm")
    echo_cmd(["nasm", "-f", "elf64", "-o", f"dist/{namewe}.o", f"dist/{namewe}.asm"])
    echo_cmd(["ld", "-o", f"dist/{namewe}", f"dist/{namewe}.o"])
  except IndexError:
    print("[ERROR] Missing required arguments")
    print("")
    print(f"Usage {compiler_name}:")
    print(f"    {compiler_name} [options] <file>")