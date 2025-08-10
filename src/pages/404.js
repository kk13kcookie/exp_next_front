import "../styles/styles.module.scss";
import Link from "next/link";

function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">ホームに戻る</Link>
    </>
  );
}

export default Custom404;
