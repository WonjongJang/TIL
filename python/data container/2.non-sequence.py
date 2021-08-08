# [set]
set_a = {1, 2, 3}
set_b = {3, 6, 9}

print(set_a - set_b)    # -> {1, 2}
print(set_a | set_b)    # -> {1, 2, 3, 6, 9}
print(set_a & set_b)    # -> {3}

set_c = {1, 1, 1}
print(set_c)

my_list = [1, 2, 3, 1, 1, 2]
my_set = set(my_list)
print(my_set)
my_list = list(my_set)
print(my_list)  # -> [1, 2, 3]

# [dictionary]
a = {}
b = dict()
print(a, type(a), b, type(b))

dic_a = {1: 1, 2: 2, 3: 3, 1: 4}    # -> key 중복되면 나중에 정의된 것 들어감
print(dic_a)

phone_book = {
    '서울': '02', '부산': '051', '경남': '055'
}
print(phone_book.keys())
print(phone_book.values())
print(phone_book.items())