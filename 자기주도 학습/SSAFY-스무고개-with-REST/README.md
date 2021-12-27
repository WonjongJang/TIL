[TOC]

# * 스무고개 with REST

## 실습

### 준비 코드

```python
import requests

url = 'http://13.125.222.176/quiz/alpha'

headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

data = {
    'nickname': '',
    'yourAnswer': '',
}

r = requests.post(url, headers=headers, json=data)
print(r.json())
```



## 정리

### REST (REpresentational State Transfer)

자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미

자원의 표현에 의한 상태 전달

> 자원 : 해당 소프트웨어가 관리하는 모든 것	ex) 문서, 그림, 데이터, 해당 소프트웨어 자체 등
>
> 자원의 표현 : 그 자원을 표현하기 위한 이름	ex) DB의 학생 정보가 자원일 때, 'students'를 자원의 표현으로 정함
>
> 상태(정보) 전달 : 데이터가 요청되어지는 시점에서 자원의 상태(정보)를 전달. JSON/XML을 통해 데이터를 주고 받는 것이 일반적

월드 와이드 웹(www)과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 개발 아키텍처의 한 형식

- 필요한 이유
  - 애플리케이션 분리 및 통합
  - 다양한 클라이언트의 등장
  - 최근의 서버 프로그램은 다양한 브라우저와 모바일 디바이스에서도 통신 가능 해야 함
  - 멀티 플랫폼에 대한 지원을 위해서 필요
- 장점
  - HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라 구축 X
  - HTTP 프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져갈 수 있음
  - HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용 가능
  - Hypermedia API의 기본을 충실히 지키면서 범용성 보장
  - REST API 메세지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악 가능
  - 여러가지 서비스 디자인에서 생길 수 있는 문제 최소화
  - 서버와 클라이언트의 역할을 명확하게 분리
- 단점
  - 표준 존재 X
  - 사용할 수 있는 메소드 4가지로 한정 (HTTP Method 형태가 제한적)
  - 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL 보다 Header 값이 더 어렵게 느껴짐
  - 구형 브라우저가 아직 제대로 지원해주지 못하는 부분 존재	ex) PUT, DELETE, pushState X
