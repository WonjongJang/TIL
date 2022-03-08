import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const params = useParams();
  console.log(params);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(params.id));
  console.log(toDo);
  return (
    <>
      <h1>{toDo.text}</h1>
      <h5>Created at: {toDo.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  // const {
  //   match: {
  //     params: { id },
  //   },
  // } = ownProps;
  // console.log(id);
  // return { toDos: state.find((toDo) => toDo.id === parseInt(id)) };
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
