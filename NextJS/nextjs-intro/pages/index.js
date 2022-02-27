// 파일명이 url이 되지만 index.js는 무조건 최초 url

import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </div>
  );
}

// global은 이 페이지에 있는 component까지만 적용. 다른 페이지는 적용 안됨 -> _app으로 해결

// import { useState } from "react";

// export default function Home() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h1>Hello {counter}</h1>
//       <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
//     </div>
//   );
// }
