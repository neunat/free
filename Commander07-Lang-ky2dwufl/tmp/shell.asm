BITS 64
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
_start:
    ;op=Token(typ=<Ops.PUSH: 1>, value=1)
    mov rax, 1
    push rax
    ;op=Token(typ=<Ops.PUSH: 1>, value=5)
    mov rax, 5
    push rax
    ;op=Token(typ=<Ops.MUL: 4>, value=None)
    pop rbx
    pop rax
    mul rbx
    push rax
    ;op=Token(typ=<Ops.PRINT: 8>, value=None)
    pop rdi
    call print
    mov rax, 60
    mov rdi, 0
    syscall
