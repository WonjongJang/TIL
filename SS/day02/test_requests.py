# 파이썬으로 요청 보내기 위한 준비
# requests 라는 모듈을 사용
# 그러기 위해 불러옴
import requests

# requests를 통해 https://www.naver.com 으로 요청 보낸 결과 출력
print(requests.get('https://www.naver.com'))
# alt + shift + 방향키 위 아래로 한 줄 복사
# print(requests.get('https://www.naver.com').text)
