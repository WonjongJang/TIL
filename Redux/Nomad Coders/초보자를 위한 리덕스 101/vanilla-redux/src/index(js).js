import { createStore } from "redux";

// ----------<Counter>----------

// [Vanilla]
// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// let count = 0;

// number.innerText = count;

// const udateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   // console.log("add");
//   count = count + 1;
//   udateText();
// };

// const handleMinus = () => {
//   count = count - 1;
//   udateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// [Redux]
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  // return "hello";
  // console.log(state);
  // console.log(count, action);
  // console.log(action);
  // if (action.type === "ADD") {
  //   // console.log("they are telling me to add one");
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }

  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

console.log(countStore); // => subscribe: store 변화 알려줌

const onChange = () => {
  // console.log("there was a change on the store");
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// console.log(countStore.getState()); // => hello, 0
// countStore.dispatch({ type: "ADD" });
// console.log(countStore.getState()); // => 1
// countStore.dispatch({ type: "MINUS" }); // const countModifier = (1, { type: "MINUS" })
// console.log(countStore.getState()); // => 0

// add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
// minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

// ----------<Counter>----------

// ----------<To Do>----------
// [Vanilla]
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const createToDo = (toDo) => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   createToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);

// [redux]
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // return [...state, { text: action.text, id: Date.now() }]; // state를 수정하는 것이 아니라 새로운 state 리턴
      // return [{ text: action.text, id: Date.now() }, ...state];
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      // return state.filter((toDo) => toDo.id !== action.id); // 해당 id를 제외한 새로운 list 생성
      const cleaned = state.filter((toDo) => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  // console.log("delete");
  // console.log(e.target.parentNode.id);
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // store.dispatch({ type: ADD_TODO, text: toDo });
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
// ----------<To Do>----------
