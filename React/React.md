[TOC]

# REACT

- Why?

  - 상위 1만 개의 웹사이트 중 45% 이상은 React	ex) 에어비앤비, 인스타그램, 페이스북, 넷플릭스 등

    https://trends.builtwith.com/javascript/React

  - 페이스북이 만듬 → 페이스북 페이지 다시 만듬 → 지속적 투자 → 폐기할 이유 없음

  - Javascript와 비슷하기 때문에 매우 거대한 커뮤니티



## Hooks



# TypeScript

JS기반의 언어. 프로그램 돌리기 전에 오류 알려줌





# 참고

## 설치

### Project

- React

```bash
npx create-react-app [name]
```

- TypeScript 추가

```bash
npx create-react-app [name] --template typescript
```

- React → TypeScript

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```



### style

```bash
npm i styled-components
```

```js
import styled, { keyframes } from "styled-components";
```

- TypeScript 추가

```bash
npm i @types/styled-components
```



## Publishing

- 결과물 업로드 패키지

```bash
npm i gh-pages
```

- 최적화

```bash
npm run build
```

