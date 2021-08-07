# [산술 연산자]
print(2 ** 1000)

print(5/2)
print(5//2)
print(int(5/2))
print(5%2)

print(divmod(5, 2))
quotient, remainder = divmod(5, 2)
print(f'quotient: {quotient}, remainder: {remainder}')

positive_num = 4
print(-positive_num)
negative_num = -4
print(+negative_num, -negative_num)



# [비교 연산자]
print(0 < 1)

print(3 == 3.0)

print(1 != 1)

print('Hi' == 'hi')



# [논리 연산자]
print(True and True)    # -> True
print(True and False)   # -> False
print(False and True)   # -> False
print(False and False)  # -> False

print(True or True)     # -> True
print(True or False)    # -> True
print(False or True)    # -> True
print(False or False)   # -> False

print(not True)         # -> False
print(not 0)            # -> True

print('a' and 'b')      # -> b
print('a' or 'b')       # -> a
vowels = 'aeiou'
print('a' and 'b' in vowels)    # -> False
print('b' and 'a' in vowels)    # -> True

print(3 and 5)
print(3 and 0)
print(0 and 3)
print(0 and 0)

print(3 or 5)
print(3 or 0)
print(0 or 3)
print(0 or 0)



# [복합 연산자]
cnt = 0
while cnt < 5:
    print(cnt)
    cnt += 1



# [기타 주요 연산자]
print('h' + 'i')
print([1, 2, 3] + [4, 5, 6])

print('a' in 'apple')
print(1 in [1, 2, 3])

a = 3
b = 3
print(a is b)
print(id(a), id(b))

c = 257
d = 257
print(c is d)
print(id(c), id(d))

string = 'hi'
print(string[0])



# [연산자 우선순위]
print(-3 ** 6)
print((-3) ** 6)
