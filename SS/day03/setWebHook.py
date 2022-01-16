# setWebHook 요청 보내야 함
import requests
from requests.models import Response

# token, url, ngrok url
TOKEN = '1872492825:AAGds_uJnJjNwombsKGR9UldDgHcLeU-llA'
# 요청 통합 URL 변수에 담기
url = f'https://api.telegram.org/bot{TOKEN}'
# ngrok http 5000 -> https://url 복사 (우클릭)
ngrok_url = 'https://9e582fa556d9.ngrok.io'
python_anywhere = 'https://wonjong.pythonanywhere.com'
set_webhook_url = f'{url}/setWebhook?url={python_anywhere}/telegram'
# telegram이 내 ngork/telegram으로 요청 보내고, 200 응답 받아감

response = requests.get(set_webhook_url)
print(response.text)
