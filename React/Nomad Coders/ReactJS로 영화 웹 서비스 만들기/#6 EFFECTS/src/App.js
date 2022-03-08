import { useState, useEffect } from "react"; // React.useState 안해도 됨

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   // console.log("render"); // state 변경 마다 모든 코드 다시 실행
//   // console.log("call an api"); // 처음 한 번만 렌더링 하고 싶음

//   // console.log("i run all the time"); // 변경 마다
//   // const iRunOnlyOnce = () => {
//   //   console.log("i run only once."); // 한 번만
//   // };
//   // useEffect(iRunOnlyOnce, []);

//   useEffect(() => {
//     // console.log("CALL THE API..."); // 처음 한 번만
//     console.log("I run only once");
//   }, []);

//   // useEffect(() => {
//   //   if (keyword !== "" && keyword.length > 5) {
//   //     // console.log("SEARCH FOR", keyword);
//   //     console.log("I run when 'keyword' changes.");
//   //   }
//   // }, [keyword]); // keyword가 변할 때만 실행

//   useEffect(() => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]); // keyword가 변할 때만 실행

//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]); // counter가 변할 때만 실행

//   useEffect(() => {
//     console.log("I run when keyword & counter change");
//   }, [keyword, counter]); // keyword와 counter 중 하나가 변할 때만 실행

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// cleanup
function Hello() {
  // useEffect(() => {
  //   // console.log("Im here!");
  //   console.log("created :)");
  //   return () => console.log("destroyed :(");
  // }, []);

  // function byFn() {
  //   console.log("bye :(");
  // }
  // function hifn() {
  //   console.log("created :)");
  //   return byFn;
  // }
  // useEffect(hifn, []);

  // 긴 방법
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);

  // 짧은 방법
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
