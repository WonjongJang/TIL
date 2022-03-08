import Head from "next/head";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

// export default 없으면 렌더링 안 됨
export default function Potato() {
  return (
    <div>
      {/* <Head>
        <title>About | Next Movies</title>
      </Head> */}
      <Seo title="About" />
      <h1>About</h1>
    </div>
  );
}
