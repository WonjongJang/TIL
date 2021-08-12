x = 'p'
print(type(x))
print(id(x))

x = y = 'y'
print(x, y)

x, y = 1, 2
print(x, y)

'''
x, y = 1    -> TypeError
print(x, y)
'''

'''
x, y = 1, 2, 3  -> ValueError
print(x, y)
'''

# 값 바꾸기
# 1. swap
x, y = 10, 20
tmp = x
x = y
y = tmp
print(x, y)

# 2. Pythonic
x, y = 10, 20
x, y = y, x
print(x, y)