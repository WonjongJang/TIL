# while
a = 0
while a < 5:
    print(a)
    a += 1
print('끝')

user_input = ''
while user_input != '안녕':
    print('안녕?')
    user_input = input('말해봐: ')

num = int(input())
i = 0
result = 0
while i <= num:
    result += i
    i += 1
print(result)

num = int(input())
while True:
    print(num % 10)
    num //= 10
    if num == 0:
        break

# for
for menu in ['김밥', '햄버거', '피자', '라면']:
    print(menu)

for i in range(10):
    print(i)
    i = 5   # -> for문 안에서 임시 변수에 값 할당해도 영향 없음

chars = input('문자를 입력하세요 : ')
for char in chars:
    print(char)

for i in range(1, 31):
    if i % 2:
        print(i)

lunch = ['짜장면', '초밥', '피자']
for i in range(3):
    print(lunch[i])

lunch = ['짜장면', '초밥', '피자']
for idx, menu in enumerate(lunch):
    print(idx, menu)
print(enumerate(lunch))                 # -> <enumerate object at 0x0000023BA4236BC0>
print(list(enumerate(lunch)))           # -> [(0, '짜장면'), (1, '초밥'), (2, '피자')]
print(list(enumerate(lunch))[0])        # -> (0, '짜장면')
print(type(list(enumerate(lunch))[0]))  # -> tuple

for idx, menu in enumerate(lunch, start=1):
    print(idx, menu)



# [반복 제어]
# break
n = 0
while n < 3:
    print(n)
    n += 1

n = 0
while True:
    if n == 3:
        break
    print(n)
    n += 1

for i in range(10):
    if i > 1:
        print('1 초과')
        break

rice = ['보리', '보리', '보리', '쌀', '보리']
for r in rice:
    if r == '쌀':
        print('잡았다!')
        break
    print(r)

# continue
for i in range(6):
    if i % 2 == 0:
        continue
    print(f'{i}는 홀수다.')

ages = [10, 23, 8, 30, 25, 31]
for age in ages:
    if age < 20:
        continue
    print(f'{age} 살은 성인입니다.')

# else
for i in range(3):
    print(i)
    if i == 100:
        print(f'{i}에서 break 실행됨.')
        break
else:
    print("break 실행안됨.")

for i in range(3):
    print(i)
    if i == 1:
        print(f'{i}에서 break 시행됨.')
        break
else:
    print('break 시행안됨.')

numbers = [1, 3, 7, 9]
for number in numbers:
    if 4 in numbers:
        print(True)
        break
else:
    print(False)

# pass
for i in range(5):
    if i == 3:
        pass
    print(i)

for i in range(5):
    if i == 3:
        continue
    print(i)    