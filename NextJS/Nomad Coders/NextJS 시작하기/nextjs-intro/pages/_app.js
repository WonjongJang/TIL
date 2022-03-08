// 여기는 import 할 게 많기 때문에 Layout으로 처리해줌

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

// 함수 이름은 중요X, 파일 이름이 중요
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <NavBar /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <span>hello</span> */}
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </>
  );
}
