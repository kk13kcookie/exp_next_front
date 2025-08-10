import React, {useState, useEffect} from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsAuth(!!token)
    // !!tokenはtokenの値を明示的にBoolean型に変換するもの
    // tokenがあればtrue

  }, []);

  const logout = () => {
    localStorage.removeItem("token"); //ログイン成功時にトークンを削除
    setIsAuth(false);
    router.push("/login");
  };

  return (
    <div className={styles.header}>
      {/*  */}
      <ul>
        <li>
          {isAuth ? (
            <div onClick={logout}>         
            <AccessibilityIcon />
            ログアウト
            </div>
          ) : (
          <Link href="/login">
            <AccessibilityIcon />
            ログイン
          </Link>
          )}
        </li>
        <li>
          <Link href="/signup">
            <AirplanemodeActiveIcon />
            登録
          </Link>
        </li>
      </ul>
      {/*  */}
    </div>
  );
};

export default Header;
