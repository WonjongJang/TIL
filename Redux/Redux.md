[TOC]

# Redux

원하는 곳에 다 쓸 수 있음 (리액트와 별개)

- Why?



## 함수

### createStore

데이터를 넣을 수 있는 장소 생성

- arg
  - `reducer()` : 데이터를 수정하는 함수 (return 하는 것이 내 데이터가 됨)
    - state
    - action : 어떻게 수정할 지 받아 옴

- .
  - `getState()`
  - `dispatch()` : reducer의 action을 줌 (반드시 object)
  - `subscribe()` : 변화 감지







## 참고

### 설치

```bash
npm install redux
```

```bash
npm i react-redux
```

- routes

```bash
npm i react-router-dom
```



### Toolkit

 ```bash
 npm install @reduxjs/toolkit
 ```

- createAction
- createReducer
- configureStore
- createSlice
