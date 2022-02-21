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
    ;op=Token(typ=<Ops.PUSH: 1>, value=0)
    mov rax, 0
    push rax
    ;op=Token(typ=<Ops.WHILE: 16>, value=None)
addr_1:
    ;op=Token(typ=<Ops.DUP: 6>, value=None)
    pop rax
    push rax
    push rax
    ;op=Token(typ=<Ops.PUSH: 1>, value=100)
    mov rax, 100
    push rax
    ;op=Token(typ=<Ops.LT: 12>, value=None)
    mov rcx, 0
    mov rdx, 1
    pop rbx
    pop rax
    cmp rax, rbx
    cmovl rcx, rdx
    push rcx
    ;op=Token(typ=<Ops.DO: 7>, value=18)
    pop rax
    test rax, rax
    jz addr_18
    ;op=Token(typ=<Ops.IF: 17>, value=None)
addr_6:
    ;op=Token(typ=<Ops.DUP: 6>, value=None)
    pop rax
    push rax
    push rax
    ;op=Token(typ=<Ops.PUSH: 1>, value=15)
    mov rax, 15
    push rax
    ;op=Token(typ=<Ops.DIVMOD: 5>, value=None)
    xor rdx, rdx
    pop rbx
    pop rax
    div rbx
    push rax
    push rdx
    ;op=Token(typ=<Ops.PUSH: 1>, value=0)
    mov rax, 0
    push rax
    ;op=Token(typ=<Ops.EQ: 14>, value=None)
    mov rcx, 0
    mov rdx, 1
    pop rbx
    pop rax
    cmp rax, rbx
    cmove rcx, rdx
    push rcx
    ;op=Token(typ=<Ops.DO: 7>, value=18)
    pop rax
    test rax, rax
    jz addr_18
    ;op=Token(typ=<Ops.PUSH: 1>, value=5)
    mov rax, 5
    push rax
    ;op=Token(typ=<Ops.PRINT: 8>, value=None)
    pop rdi
    call print
    ;op=Token(typ=<Ops.END: 9>, value=1)
    jmp addr_1
addr_15:
    ;op=Token(typ=<Ops.PUSH: 1>, value=1)
    mov rax, 1
    push rax
    ;op=Token(typ=<Ops.ADD: 2>, value=None)
    pop rbx
    pop rax
    add rax, rbx
    push rax
    ;op=Token(typ=<Ops.END: 9>, value=-1)
addr_18:
    mov rax, 60
    mov rdi, 0
    syscall
