import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  // console.log(router);

  return (
    <nav>
      <img src="/vercel.svg" />
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      {/* 컴포넌트 내로 style 한정 */}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );

  // return (
  //   <nav>
  //     <Link href="/">
  //       <a
  //         className={`${styles.link} ${
  //           router.pathname === "/" ? styles.active : ""
  //         }`}
  //       >
  //         Home
  //       </a>
  //       {/* a 없어도 되지만 Link에 스타일이나 무언가를 줄 수 없기 때문에 a에 주기 위해 놔둠 */}
  //     </Link>
  //     <Link href="/about">
  //       <a
  //         className={`${styles.link} ${
  //           router.pathname === "/about" ? styles.active : ""
  //         }`}
  //       >
  //         About
  //       </a>
  //     </Link>
  //   </nav>
  // );
}
