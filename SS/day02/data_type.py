# 터미널 단축키 : ctrl + `
# 숫자
number = 3
print(type(number))

# 문자열
string = '문자열'
print(type(string))

# boolean
boolean = True
print(type(boolean))

# 형변환
string_number = '58'
# 문자열과 숫자는 연산 안 됨
# print(string_number + 5)
# 문자열을 숫자로 바꾼 다음 타입을 출력
print(type(int(string_number)))

# f-string / string interpolation
name = '홍길동'
# 문자열 앞에 f를 붙이고, 변수를 넣고 싶은 곳에 {}
print(f'{name}입니다. 반갑습니다.')

# 한 줄만 주석
"""
여러 줄 주석입니다.
리스트
"""
# 리스트 선언
my_list = ['java', 'python']

# 리스트 원소 접근
# list[index]
print(my_list[0])

# 리스트 원소 변경
# my_list의 첫번째 요소를 'django'로 바꾸고 싶을 때
my_list[0] = 'django'
print(my_list)

# 리스트 길이
# len() 함수
print(len(my_list))

"""
딕셔너리
"""

# 딕셔너리 선언
my_info = {
    'name': '장원종',
    'age': 13
}
print(my_info)

# 딕셔너리 원소 접근
print(my_info['name'])
# 갖고 있지 않은 key로 접근하면 keyerror 발생
# print(my_info['location'])
# 딕셔너리는 원소 접근 방법 2가지
# 딕셔너리가 가지고 있는 get 함수
print(my_info.get('name'))
print(my_info.get('location'))

# 딕셔너리 원소 변경
my_info['name'] = '홍길동'
print(my_info)

"""
딕셔너리 실습
"""
coin = {
    'BTC': {
        'opening_price': '44405000',
        'closing_price': '38806000',
        'min_price': '36640000',
        'max_price': '44999000',
        'prev_closing_price': '44404000',
        'fluctate_24H': '-7463000',
        'fluctate_rate_24H': '-16.13',
    },
    'ETH': {
        'opening_price': '1458000',
        'closing_price': '1229000',
        'min_price': '1100000',
        'max_price': '1490000',
        'prev_closing_price': '1458000',
        'fluctate_24H': '-275000',
        'fluctate_rate_24H': '-18.28',
    },
    'XRP': {
        'opening_price': '364.5',
        'closing_price': '311.9',
        'min_price': '284.2',
        'max_price': '372.7',
        'prev_closing_price': '364.2',
        'fluctate_24H': '-90.6',
        'fluctate_rate_24H': '-22.51',
    },
}

# 1-1. 코인의 정보에서 BTC의 최대 가격을 출력하시오.
# coin['BTC'] -> dict
print(coin['BTC']['max_price'])

# 1-2. BTC의 시가와(opening price) XRP의 시가를 더한 결과를 출력하시오.
btc_opening_price = coin['BTC']['opening_price']
xrp_opening_price = coin['XRP']['opening_price']
print(btc_opening_price, xrp_opening_price)
print(int(btc_opening_price) + float(xrp_opening_price))

