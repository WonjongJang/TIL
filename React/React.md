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





# 설치

## Project

```bash
npx create-react-app [name]
```

- TypeScript 추가

```bash
npx create-react-app [name] --template typescript
```

- React → TypeScript 변환

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```



## Router

```bash
npm i react-router-dom
```

- TypeScript 추가

```bash
npm i --save-dev @types/react-router-dom
```



## State

### Redux

https://react-redux.js.org/



### Recoil

https://recoiljs.org/

```bash
npm i recoil
```

- 상태관리 유지

```bash
npm i recoil-persist
```



## React Hook Form

https://react-hook-form.com/

```bash
npm i react-hook-form
```





## Query

: API 첫 접근에서 cache에 저장하여 다시 접근 X

```bash
npm i react-query
```

- 캐시 확인

```tsx
import { ReactQueryDevtools } from "react-query/devtools";

<ReactQueryDevtools initialIsOpen={true} />
```



## style

https://styled-components.com/

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



- reset (초기 세팅)

```bash
npm i styled-reset

# 설치 대신 코드 복사

```



## chart

> https://apexcharts.com/

```bash
npm install --save react-apexcharts apexcharts
```



## motion

https://www.framer.com/motion

```bash
npm i framer-motion
```







## helmet

: html title 변경

```bash
npm i react-helmet
```

- TypeScript 추가

```bash
npm i --save-dev @types/react-helmet
```



## react beautiful dnd

```bash
npm i react-beautiful-dnd
```

- 

```bash
npm i --save-dev @types/react-beautiful-dnd
```





# 참고

## Publishing

- 결과물 업로드 패키지

```bash
npm i gh-pages
```

- 최적화

```bash
npm run build
```



## Extensions

- Prettier

- vscode-styled-components : styled 내부 css 작성 시 자동완성
