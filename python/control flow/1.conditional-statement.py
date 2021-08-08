# 크리스마스 판독기
is_christmas = input('날짜를 입력해주세요 ex)12/24 : ')

if is_christmas == '12/25':
    print('크리스마스입니다 :)')
else:
    print('크리스마스가 아닙니다 :(')

# 홀/짝 판독기
num = int(input('숫자를 입력하세요 : '))

if num % 2 != 0:
    print('홀수입니다.')
else:
    print('짝수입니다.')

# 복수 조건문 연습
score = int(input())

if score >= 90:
    print('A')
elif score >= 80:
    print('B')
elif score >= 70:
    print('C')
elif score >= 60:
    print('D')
else:
    print('E')

# 중첩 조건문
score = int(input())

if score >= 90:
    print('A')
    if score >= 95:
        print('참잘했어요.')
elif score >= 80:
    print('B')
elif score >= 70:
    print('C')
elif score >= 60:
    print('D')
else:
    print('E')

# 조건 표현식
num = int(input('숫자를 입력하세요 : '))
print('0 보다 큼') if num > 0 else print('0 보다 크지않음')

num = int(input('숫자를 입력하세요 : '))
value = num if num >= 0 else -num
print(value)

num = 2
result = '홀수입니다.' if num % 2 else '짝수입니다.'
print(result)

num = -5
if num >= 0:
    value = num
else:
    value = 0
print(value)