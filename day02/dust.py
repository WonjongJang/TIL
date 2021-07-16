# >>> sido_name의 미세먼지 농도는 dust입니다.
# pm10Value
import requests

key = 'HPztLEsN%2Fi574AkaN9ZlV8iOPmocPMWaG21%2FER9kwa%2B%2BzeMCtg%2BsJtYwTzlQJ2DWB%2BgRgcF2%2BqKvGBt7TkRYyQ%3D%3D'
#사용자가 입력한 값으로 요청
sido_name = input('전국, 서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종 중에서 선택해주세요 : ')
url = f'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey={key}&returnType=json&numOfRows=100&pageNo=1&sidoName={sido_name}&ver=1.0'
response = requests.get(url).json()

sido_name = response['response']['body']['items'][28]['stationName']
dust = response['response']['body']['items'][28]['pm10Value']

# stationName 입력 받아서 출력
# station_user_input = input('동 명을 입력해 주세요 : ')
# items = response['response']['body']['items']
# for value in items:
#     if value['stationName'] == '물금읍':
#         sido_name = value['sido_name']
#         station_name = value['stationName']
#         dust = value['pm10Value']
# print(f'{sido_name}의 미세먼지 농도는 {dust}입니다.')