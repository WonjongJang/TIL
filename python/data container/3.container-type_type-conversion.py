l = [1, 2, 3, 4]
print(str(l), type(str(l)))
print(tuple(l), type(tuple(l)))
print(set(l), type(set(l)))
# print(range(l), type(range(l))) -> TypeError
# print(dict(l), type(dict(l)))   -> TypeError

t = (1, 2, 3, 4)
print(str(t), type(str(t)))
print(list(t), type(list(t)))
print(set(t), type(set(t)))
# print(range(t), type(range(t))) -> TypeError
# print(dict(t), type(dict(t)))   -> TypeError

r = range(1, 5)
print(str(r), type(str(r)))
print(list(r), type(list(r)))
print(set(r), type(set(r)))
print(tuple(r), type(tuple(r)))
# print(dict(r), type(dict(r)))   -> TypeError

s = {1, 2, 3, 4}
print(str(s), type(str(s)))
print(list(s), type(list(s)))
print(tuple(s), type(tuple(s)))
# print(range(s), type(range(s))) -> TypeError
# print(dict(s), type(dict(s)))   -> TypeError

d = {'name': 'ssafy', 'year': 2020}
print(str(d), type(str(d)))
print(list(d), type(list(d)))
print(tuple(d), type(tuple(d)))
print(set(d), type(set(d)))
# print(range(d), type(range(d))) -> TypeError



# [immutable]
num1 = 20
num2 = num1
num2 = 10
print(num1)
print(num2)

# [mutable]
num1 = [1, 2, 3, 4]
num2 = num1
num2[0] = 100
print(num1)
print(num2)