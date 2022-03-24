[TOC]

# NextJS

- React와의 차이점
  - React
    - Library : 자유도
    - client-side rendering : 브라우저가 자바스크립트를 가져와서 자바스크립트가 모든 UI 만듬 (div id="root")
  - NextJS
    - Framework : 특정한 규칙에 따라 해야 함
    - pre-rendering : SEO에 좋음



# Tailwind CSS

https://tailwindcss.com

https://tailwind.build/classes

- class
  - `min-h-screen` : 화면 세로 끝까지 bg 채우기
  - `aspect-square` :  정사각형
  - `space-x/y` : flex 간의 거리 자동으로 계산해 넣어줌



# Prisma





# PlanetScale

MySQL 호환 Serverless 데이터베이스 플랫폼

https://planetscale.com/

https://github.com/planetscale/cli#installation



# Twilio

개인화된 상호 작용과 신뢰할 수 있는 글로벌 커뮤니케이션을 제공하여 고객과 연결

 https://www.twilio.com/



# Iron session

https://github.com/vvo/iron-session

서명, 암호화된 쿠키를 사용하는 nodejs stateless 세션 도구

JWT는 암호화되지 않고 서명이 되어있음

유저가 안에 있는 정보를 볼 수 없음

세션을 위한 백엔드 구축이 필요 없음



# SWR

https://swr.vercel.app/ko/docs/getting-started

데이터 변경 자동 감시



# NextAuth.js

NextAuth.js는 Next.js 애플리케이션을 위한 완전한 오픈 소스 인증 솔루션

Next.js 및 Serverless를 지원하도록 처음부터 설계

https://next-auth.js.org/
https://www.npmjs.com/package/next-auth



# Cloudflare

이미지 업로드, 리사이징, 최적화

https://developers.cloudflare.com/images/cloudflare-images/upload-images/direct-creator-upload/

토큰 생성 : https://dash.cloudflare.com/profile/api-tokens

- Images
- Stream

  - 방송 도구

    - OBS

    - Live Now



# Middlewares

1. pages에 바로 넣어서 글로벌 미들웨어 생성

2. 해당 페이지에만 실행될 미들웨어 생성



Page, Api 둘다 동작

훅으로 막는거 보다 편리 (훅은 복붙 많이 해야함, DB에 요청 보내야함)

미들웨어는 DB 접근없이 쿠키 유무만 확인



# ISR





# 설치

## Project

```bash
npx create-next-app@latest
```

- TypeScript 추가

```bash
npx create-next-app@latest --typescript
```

- React 18

```bash
npm i next@latest react@rc react-dom@rc

# TypeError: Cannot set properties of undefined (setting 'reactRoot')
npm i next@12.0.8 react@rc react-dom@rc
```

- Tailwind CSS

```bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# plugin
npm i @tailwindcss/forms
```



## Prisma

```bash
npm i prisma -D

# DB와 소통
npm i @prisma/client

# 시작
npx prisma init

# 관리자
npx prisma studio

# push (pscale 연결된 상태일 때)
npx prisma db push
```

- seed

```bash
npm i ts-node

npx prisma db seed
```



## PlanetScale

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser

Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')

scoop install curl

scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git

scoop install pscale mysql
```

```bash
# 설치 확인
pscale

# 연결
pscale connect carrot-market
```



- 실행

```bash
npm run dev
```

- 빌드

```bash
npm run build
```





## React-hook-form

```bash
# React 18
npm i react-hook-form --legacy-peer-deps
```



## Twilio

- SMS

```bash
npm i twilio
```

- Email

```bash
npm i --save @sendgrid/mail
```



## Iron session

```bash
npm i iron-session
```



## SWR

```bash
npm i swr

# React 18
npm i swr --legacy-peer-deps
```



## gray-matter

```bash
npm install --save gray-matter
```



## Dynamic getStaticProps

페이지 빌드 전 데이터 추가

```bash
npm i unified remark-parse remark-html
```





## Extension

- Tailwind CSS IntelliSense : 자동 완성 `ctrl+space`
- Prisma



heroicons

https://www.typescriptlang.org/ko/docs/handbook/2/generics.html : 타입스크립트 제네릭

Session vs Token vs Cookie
https://youtu.be/tosLBcAX1vk



- NextJS 기본기능

  - 페이지의 처음 상태를 HTML로 렌더링 (페이지를 불러오자마자 볼 수 있도록)
  - 리액트를 클라이언트가 불러옴 (리액트가 프론트단을 불러온다?)
  - useSWR 불러옴
  - useSWR이 API 요청하면 DB에서 데이터 불러옴
  - 리액트가 컴포넌트를 화면에 그려줌

- getServerSideProps

  > 서버단에서 데이터를 불러옴
  >
  > 로딩 상태 없이 페이지 보여줄 수 있음
  >
  > HTML 자체에 데이터가 들어있어서 가능
  >
  > 리액트가 데이터를 불러올 필요 X (프론트단에서 리액트가 한 일은 1도 없음)

  - 장점 : 유저가 로딩 상태를 볼 일이 없음 (데이터 나타날 때까지 조금 기다리면 됨)
  - 단점 : nav와 같은 기본적으로 바로 볼 수 있는 UI 컴포넌트도 데이터 불러올 때까지 못봄

- getStaticProps

  > 웹사이트 빌드할 때 한번만 생성
  >
  > 어떠한 데이터도 이용해서 여러 개의 HTML 페이지를 생성할 수 있게 함 ex) md 파일
  >
  > 리액트랑 상관 X, 그냥 HTML일 뿐 JS조차 필요없다

ㅇㅇ
