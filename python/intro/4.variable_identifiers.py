import keyword
print(keyword.kwlist)

print(5)

'''
print = 'hi'
print(5)        -> TypeError
'''

print = 'hi'
del print
print(5)