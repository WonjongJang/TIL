import NavBar from "../components/NavBar";
import "../styles/globals.css";

// 함수 이름은 중요X, 파일 이름이 중요
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      {/* <span>hello</span> */}
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </>
  );
}
