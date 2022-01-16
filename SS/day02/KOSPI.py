# requests 불러오기
import requests
from bs4 import BeautifulSoup

# url 따로 관리 (길이 길어지기 때문)
url = 'https://finance.naver.com/sise/'
response = requests.get(url).text # 응답 받은 문서를 문자열로 반환
# print(response) -> 전체 결과 출력
# print(type(response)) -> string

# bs4를 통해 파이썬이 읽을 수 있는 데이터형으로 변경
# 변경하는 문서가 어떤 형태인지도 같이 작성해야 함
# html.parser -> html 문서를 파이썬에서 읽을 수 있도록 만들어 줌
data = BeautifulSoup(response, 'html.parser')
# print(type(data))

kospi = data.select_one('#KOSPI_now')
# print(kospi)
# print(type(kospi)) -> bs4.element.Tag
result = kospi.text

# 현재의 코스피 지수는 result 입니다.
print(f'현재의 코스피 지수는 {result}입니다.')

