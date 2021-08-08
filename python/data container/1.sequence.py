# [list]
my_list = []
another_list = (1, 2, 3)
another_list = list(another_list)
print(type(my_list), type(another_list))

location = ['서울', '대전', '광주', '구미', '부산']
print(location)
print(type(location))
print(location[0])

# [tuple]
my_tuple = (1, 2)
print(type(my_tuple))

another_tuple = 1, 2
print(another_tuple, type(another_tuple))

x, y = 1, 2
print(x)
print(y)

x, y = (1, 2)
print(x)
print(y)

x, y = y, x
print(x)
print(y)

empty = ()
print(type(empty))  # -> tuple
print(len(empty))   # -> 0

single_tuple = (1, )
print(type(single_tuple))
print(len(single_tuple))

tuple_or_not = ('hello')
print(type(tuple_or_not))   # -> str

# [range]
print(type(range(3)))

a = list(range(10))
print(a, type(a))

b = list(range(4, 9))
print(b, type(b))

c = list(range(0, -10, -1))
print(c, type(c))



# [시퀀스에서 활용할 수 있는 연산자/함수]
my_string = 'string'
print('a' in my_string)

my_list = [1, 2, 3, 5, 1]
print(3 in my_list)

print('안녕' + '하세요')
print((1, 2) + (5, 6))

zero_list = [0] * 6
print(zero_list)

location = ['서울', '대전', '광주', '구미', '부산']
print(location[0])
print(location[1:3])

range_list = list(range(31))
print(range_list)
new_range_list = range_list[0:31:3]
print(new_range_list)
print(len(range_list))  # -> 31
print(min(range_list))
print(max(range_list))

sample_list = [1, 2, 1, 3, 1, 5]
print(sample_list.count(1))