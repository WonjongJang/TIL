# [암시적 형변환]
print(True + 3)

int_number = 1
float_number = 1.0
complex_number = 3+4j
print(int_number + float_number, type(int_number + float_number))
print(int_number + complex_number, type(int_number + complex_number))

# [명시적 형변환]
string = '장원종'
# print(int_number + string)    -> TypeError
print(str(int_number) + string)

a = '3'
print(int(a), type(int(a)))

a = '3.5'
print(float(a), type(float(a)))

a = 'hi'
# print(int(a)) -> ValueError

a = '3.5'
# print(int(a)) -> ValueError

a = 3.5
print(int(a))