# 현재 원/달러의 환율은 result입니다.

import requests
from bs4 import BeautifulSoup

url = 'https://finance.naver.com/marketindex/'
response = requests.get(url).text
data = BeautifulSoup(response, 'html.parser')
kospi = data.select_one('#exchangeList > li.on > a.head.usd > div > span.value')
result = kospi.text

print(f'현재 원/달러 환율은 {result}입니다.')
