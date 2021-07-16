
import requests
from bs4 import BeautifulSoup

url = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90'
response = requests.get(url).text
data = BeautifulSoup(response, 'html.parser')
kospi = data.select_one('#_cs_root > div.ar_spot > div > h3 > a > span.spt_con.up > strong')
result = kospi.text

print(f'현재 삼성전자 주식은 {result}원 입니다.')
