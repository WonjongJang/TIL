import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = () => {
    // console.log("leaving");

    const { clientY } = event; // 위로 올라갔을 때만
    if (clientY <= 0) {
      onBefore();
    }

    // onBefore(); // 화면 밖으로 나갔을 때
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function App() {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
