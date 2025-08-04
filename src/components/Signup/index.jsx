"use client";
import { useForm } from "react-hook-form";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Face6Icon from "@mui/icons-material/Face6";

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <div className={styles.form}>
      {/*  */}
      <h3 className={styles.form__title}>アカウントを作成</h3>

      <div className={styles.form__item}>
        <label htmlFor="">お名前</label>
        <input
          type="text"
          {...register("firstName", {
            required: "お名前は必須です",
            minLength: {
              value: 3,
              message: "お名前は8文字以上で入力してください",
            },
          })}
          placeholder="お名前を入力してください"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">メールアドレス</label>
        <input
          type="email"
          {...register("email", {
            required: "メールアドレスは必須です",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "メールアドレスの形式が正しくありません",
            },
          })}
          placeholder="メールアドレスを入力してください"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">パスワード</label>
        <input
          type="password"
          {...register("password", {
            required: "パスワードは必須です",
            minLength: {
              value: 8,
              message: "パスワードは8文字以上で入力してください",
            },
          })}
          placeholder="パスワードを入力してください"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button className={styles.form__btn} onClick={handleSubmit(onSubmit)}>
        <Face6Icon color="primary" />
        ログイン
        <Face6Icon sx={{ color: "red" }} />
      </button>
      {/*  */}
    </div>
  );
};

export default Signup;
