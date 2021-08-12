a = 3
print(type(a))

a = 2 ** 64
print(a, type(a))

import sys
max_int = sys.maxsize   # sys.maxsize == 2**63 - 1
print(max_int)
super_max = sys.maxsize * sys.maxsize
print(super_max)

# 진수
binary_number = 0b10        # 2진수
octal_number = 0o10         # 8진수
decimal_number = 10         # 10진수
hexadecimal_number = 0x10   # 16진수
print(binary_number)
print(octal_number)
print(decimal_number)
print(hexadecimal_number)



a = 3.5
print(type(a))

b = 314e-2  # E도 가능
print(type(b), b)

p = 3.5 + 3.2
m = 3.5 - 3.12
print(round(m, 2))  # 반올림
print(m == 0.38)
print(m)

# 실수 값 처리 방법
# 1. 임의의 작은 수
a = 1.1
b = 1.11
print(abs(a - b) <= 1e-10)  # True 나오면 a와 b 같음
# 2. sys 모듈
import sys
print(abs(a - b) <= sys.float_info.epsilon)
# 3. math 모듈
import math
print(math.isclose(a, b))



a = 3-4j
print(type(a))

t = complex('1+2j')
print(type(t))

print(t.real)   # 실수부
print(t.imag)   # 허수부