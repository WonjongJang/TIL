# flask 불러온다.
# flask는 파이썬이 기본으로 가지고 있는 모듈 아님
# 설치 해야 함
# 설치는 pip 라고 하는 파이썬 패키지를 통해 함
# pip install Flask -> bash 창에 입력해서 설치

from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route("/") # @ : decorator
def hello_world():
    return "<p>Hello, World!</p>"

# /ssafy -> hello, SSAFY
# Flask로 어떤 문서를 응답할 때, return에 작성하는 것이 아니라,
# 특정 문서 자체를 불러와서 응답해줄 수 있음
# render_template
# flask가 가지고 있는 함수 render_template를 불러와야 함
# 중복되면 ,로 여러 개 추가 가능
# html 문서 하나 만들건데 그 문서를 보여주는 페이지 만들기
@app.route('/ssafy')
def ssafy():
    # ssafy.html을 rendering 함
    return render_template('ssafy.html') # html 문서를 보여준다


# 로그인이든 아니면 채팅이든
# 내가 입력한 값을 보낼 수 있는
# 메시지를 보낼 수 있고, 보내온 메시지를 받아서 어떤 행위를 실행하는 코드
# 함수가 2개 필요

# write함수(메시지를 입력하는 곳), send(메시지를 받는 곳)
@app.route('/write')
def write():
    return render_template('write.html')

@app.route('/send')
def send():
    # 사용자가 요청 보낸 정보 확인 할 수 있는 request 불러옴
    # from flask import request -> 최상단에 작성
    # print(request)
    # >>> <Request 'http://127.0.0.1:5000/send?message=안녕하세요' [GET]>
    # print(dir(request))
    message = request.args.get('message')
    
    # 텔레그램 챗봇 api url 필요
    # 내 챗봇 토큰 필요
    TOKEN = '1872492825:AAGds_uJnJjNwombsKGR9UldDgHcLeU-llA'
    # 요청 통합 url 변수에 담기
    url = f'https://api.telegram.org/bot{TOKEN}'
    # 메시지 보낼 사람 chat_id 필요
    chat_id = 1820753280
    send_message_url = f'{url}/sendMessage?chat_id={chat_id}&text={message}'
    # 파이썬으로 요청 보내는 requests 필요
    requests.get(send_message_url)
    return render_template('send.html')

# 주소 함수 이름이랑 동일하게 작성
# html 이름도 함수 이름이랑 동일하게 작성
# 안의 내용은 일단 제목만 입력해서
# 두 페이지 정상 작동하는지 확인

# post 방식의 요청만 받겠다
@app.route('/telegram', methods=['POST'])
def telegram():
    # 요청 정보는 request에 들어 있음
    response = request.get_json()
    # print(response)
    # response에 chat_id, text 들어 있음
    # 1. 
    chat_id = response['message']['from']['id']
    text = response['message']['text']
    # 사용자가 챗봇한테 보낸 메시지 똑같이 돌려보내주는 코드
    # 2.
    TOKEN = '1872492825:AAGds_uJnJjNwombsKGR9UldDgHcLeU-llA'
    url = f'https://api.telegram.org/bot{TOKEN}'
    # text에 들어있는 값이 '누구야' 일 때
    # 저는 ~~님의 챗봇입니다.
    # 3.
    if text == '누구야':
        text = '저는 원종님의 챗봇입니다'
    elif text == '미세먼지':
        key = 'HPztLEsN%2Fi574AkaN9ZlV8iOPmocPMWaG21%2FER9kwa%2B%2BzeMCtg%2BsJtYwTzlQJ2DWB%2BgRgcF2%2BqKvGBt7TkRYyQ%3D%3D'
        dust_url = f'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey={key}&returnType=json&numOfRows=100&pageNo=1&sidoName=경남&ver=1.0'
        response = requests.get(dust_url).json()

        sido_name = response['response']['body']['items'][3]['stationName']
        dust = response['response']['body']['items'][3]['pm10Value']
        text = f'{sido_name}의 미세먼지 농도는 {dust}입니다.'

    send_message_url = f'{url}/sendMessage?chat_id={chat_id}&text={text}'
    requests.get(send_message_url)

    # 2번까지 완료하신 분들은 어제 작성한 미세먼지 API 코드도 같이
    # 가지고 오셔서 '미세먼지' 라고 입력 받으면
    # 미세먼지 정보를 알려주는 코드도 작성해 볼게요.
    
    """
    {
        'update_id': 953933397,
        'message': {
            'message_id': 19,
            'from': {'id': 1820753280,
            'is_bot': False,
            'fir_bot': False,
            'first_name': 'Wonjong',
            'last_name': 'Jang',
            'language_code': 'ko'
            },
            '753280, 'first_namchat': {'id': 1820753280, 'first_name': 'Wonjong', 'last_name': 'Jang', 'type': 'privㅇ'}}ate'}, 'date': 1626414104, 'text': 'ㅇ'}}
    """


    # 응답은 본문과 status_code 200을 같이 보내줌
    return '', 200




















if __name__ == '__main__':
    app.run(debug=True)