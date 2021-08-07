greeting = 'hi'
name = 'ssafy'
print(greeting, type(greeting))
print(name, type(name))

age = input()
print(age, type(age))

# print('철수가 말했다. '안녕?'')   -> SyntaxError
print('철수가 말했다. \'안녕?\'')
print('철수가 말했다. "안녕?"')

print('heyheyhey yo!')
print('hey' * 3 + ' ' + 'yo!')

prefix = 'Py'
print(prefix + 'thon')

# [이스케이프 시퀀스]
print('엔터\n탭\t탭')

print('내용을 띄워서 출력하고 싶으면?', end='\t')
print('옆으로 띄워짐')

print('개행 문자 말고도 가능합니다')
print('진짜로')
print('알고보면 print는 기본이 \\n')

# [String interpolation]
# 1. %-formatting
name = '장원종'
score = 100
print('%s' % name)
print('%d' % score)
print('%f' % score)
# 2. str.format()
print('{}'.format(name))
# 3. f-string
print(f'{name}')
print(f'''
Hello,
{name}
''')

import datetime
today = datetime.datetime.now()
print(today)
print(f'오늘은 {today:%y}년 {today:%m}월 {today:%d}일 {today:%A}')

pi = 3.141592
print(f'원주율은 {pi:.3}, 반지름이 2일 때 원의 넓이는 {pi * (2 ** 2)}')