// 대괄호 안에 사용할 변수명을 넣음 (...하면 앞에 다른거 들어와도 됨)

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  console.log(router);
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      {/* <h4>{router.query.title || "Loading..."}</h4> */}
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  // console.log(ctx);

  return {
    props: {
      params,
    },
  };
}
