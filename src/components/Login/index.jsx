import React from "react";
import styles from "@/components/Login/style.module.scss";
import Link from "next/link";
import Face6Icon from "@mui/icons-material/Face6";

const Login = () => {
  return (
    <div className={styles.form}>
      {/*  */}
      <h3 className={styles.form__title}>ログイン</h3>

      <div className={styles.form__item}>
        <label htmlFor="">メールアドレス</label>
        <input type="text" placeholder="メールアドレスを入力してください" />
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">パスワード</label>
        <input type="text" placeholder="パスワードを入力してください" />
      </div>
      <button className={styles.form__btn}>
        <Face6Icon color="primary" />
        <Face6Icon color="warning" />
        <Face6Icon color="secondary" />
        ログイン
        <Face6Icon sx={{ color: "red" }} />
        <Face6Icon style={{ color: "green" }} />
      </button>

      {/*  */}
    </div>
  );
};

export default Login;
