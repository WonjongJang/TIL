import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { add, remove } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  // console.log(toDos);
  // console.log(rest);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    // console.log(text);
    setText("");
    // dispatch(addToDo(text))
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  // console.log(state, ownProps);
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); // Redus state에서 Home으로 prop으로 전달
