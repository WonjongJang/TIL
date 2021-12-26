[TOC]

# DB 설계 및 ERD 작성

## 실습



## 정리

### ERD

https://www.erdcloud.com/

https://www.youtube.com/watch?v=E6LbuLoU6rc

https://www.youtube.com/watch?v=qm8cqItjIPo



### DB

https://dataonair.or.kr/

체계화된 데이터의 모임

여러 사람이 공유하고 사용할 목적으로 통합 관리되는 정보의 집합

몇 개의 자료 파일을 조직적으로 통합하여 자료 항목의 중복을 없애고 자료를 구조화하여 기억시켜 놓은 자료의 집합체

- 장점
  - 데이터 충복 최소화
  - 데이터 무결성 (정확한 정보를 보장)
  - 데이터 일관성
  - 데이터 독립성 (물리적/논리적)
  - 데이터 표준화
  - 데이터 보안 유지

#### RDB (Relational DataBase)

키와 값들의 간단한 관계를 표 형태로 정리한 데이터베이스

- 용어
  - 스키마(schema) : 자료의 구조, 표현 방법, 관계 등 전반적인 명세를 기술한 것
  - 테이블(table) : 열과 행의 모델을 사용해 조직된 데이터 요소들의 집합
  - 열(column / field) : 데이터 형식 지정
  - 행(row / record) : 실제 데이터 저장
  - 기본키(Primary Key) : 각 행의 고유 값. 반드시 설정

#### RDBMS (Relational DataBase Management System)

관계형 모델을 기반으로 하는 데이터베이스 관리 시스템

- 종류

  - MySQL

  - SQLite

    서버 형태가 아닌 파일 형식으로 응용 프로그램에 넣어서 사용 → 비교적 가벼운 DB

    구글 안드로이드 운영체제에 기본적으로 탑재

    오픈소스 프로젝트 (자유롭게 사용 가능)

  - PostgreSQL

  - ORACLE

  - MS SQL

> ※ NoSQL (Not only SQL) : RDB 형태가 아닌 다른 형태의 데이터 저장 기술
>
> ​	테이블 간 관계 정의 X (테이블 간 join 불가능)
>
> ​	빅데이터 등장 → 데이터와 트래픽 기하급수적으로 증가 → RDBMS의 성능을 향상시키기 위해서는 장비 성능↑ (Scale-Up) → 비용↑
>
> ​	∴ 비용 고려하여 데이터 일관성을 포기. 여러 대의 데이터에 분산 저장 (Scale-Out)

##### SQL (Structured Query Language)

RDBMS의 데이터 관리를 위해 설계된 특수 목적의 프로그래밍 언어

- 분류

|                        분류                        |                             개념                             |                    예시                     |
| :------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------------------: |
|  DDL(Data Definition Language) : 데이터 정의 언어  | 관계형 데이터베이스 구조(테이블, 스키마)를 정의하기 위한 명령어 |         CREATE<br />DROP<br />ALTER         |
| DML(Data Manipulation Language) : 데이터 조작 언어 |    데이터의 저장, 조회, 수정, 삭제 등을 하기 위한 명령어     | INSERT<br />SELECT<br />UPDATE<br />DELETE  |
|   DCL(Data Control Language) : 데이터 제어 언어    |    데이터베이스 사용자의 권한 제어를 위해 사용하는 명령어    | GRANT<br />REVOKE<br />COMMIT<br />ROLLBACK |



### Django

- 사용해야 하는 이유
  - 검증된 Python 언어 기반 Web framework
  - 대규모 서비스에도 안정적
  - 많은 기업에서 사용 `Spotify, Instagram, Dropbox, Delivery Hero`
