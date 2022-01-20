import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// console.log(addToDo, deleteToDo); // => function
// console.log(addToDo.type, deleteToDo.type); // => text
// console.log(addToDo(), deleteToDo()); // => object

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // case ADD:
//     //   return [{ text: action.text, id: Date.now() }, ...state];
//     // case DELETE:
//     //   return state.filter((toDo) => toDo.id !== action.id);
//     // default:
//     //   return state;
//     case addToDo.type:
//       console.log(action);
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe();

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

// export default store;

// [Toolkit]
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); // immer가 뒤에서 처리해줌 (mutate 해도 되는 이유, mutate면 return 필요없음)
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload), // return (새로운 state 만드는 것이기 때문)
// });

// const store = configureStore({ reducer }); // Devtool 사용 가능

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

// export default store;

// [createSlice]
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// const store = configureStore({ reducer: toDos.reducer }); // Devtool 사용 가능

// console.log(toDos.actions);

export const { add, remove } = toDos.actions;

// export default store;
export default configureStore({ reducer: toDos.reducer });
