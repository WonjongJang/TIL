import requests

name = 'wonjong'
url = f'https://api.nationalize.io/?name={name}'
# 응답받은 값을 json 함수를 통해 dict로 변환
response = requests.get(url).json()
print(response)

# 국가명 추출
country_id = response['country'][0]['country_id']
# print(country_id)

# 확률 추출
probability = response['country'][0]['probability'] * 100
# print(probability)

name = response['name']
print(f'{name}의 국가는 {probability}% 확률로 {country_id}입니다.')

# round 내장함수로 반올림 가능
# rount(float, 반올림하고자 하는 위치)
# round(probability, 2) -> 소수점 두 자리까지