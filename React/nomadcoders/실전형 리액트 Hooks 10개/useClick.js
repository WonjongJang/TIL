import { useEffect, useRef } from "react";


// useRef
function App() {
  const potato = useRef();
  // setTimeout(() => console.log(potato.current), 5000)
  setTimeout(() => potato.current.focus(), 5000);

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
}

export default App;



// useClick
const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
