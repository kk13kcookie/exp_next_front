"use client";
import { useForm } from "react-hook-form";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Face6Icon from "@mui/icons-material/Face6";

const Signup = () => {
  const { handleSubmit, register, formState } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <div className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/*  */}
      <h3 className={styles.form__title}>アカウントを作成</h3>

      <div className={styles.form__item}>
        <label htmlFor="">お名前</label>
        <input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="お名前を入力してください"
        />
      </div>

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
        ログイン
        <Face6Icon sx={{ color: "red" }} />
        <Face6Icon style={{ color: "green" }} />
      </button>
      {formState.errors.firstName && (
        <p>{formState.errors.firstName.message}</p>
      )}
      {/*  */}
    </div>
  );
};

export default Signup;
