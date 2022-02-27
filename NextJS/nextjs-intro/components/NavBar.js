import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  // console.log(router);

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      {/* 컴포넌트 내로 style 한정 */}
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
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
