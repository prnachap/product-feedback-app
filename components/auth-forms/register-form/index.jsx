import React from "react";
import cls from "classnames";
import Link from "next/link";

import Button from "../../../ui/button/Button";
import Card from "../../../ui/card/Card";
import TextInput from "../../../ui/forms/text-input/TextInput";

import styles from "../login-form/Login.module.scss";

const Register = () => {
  return (
    <div className={styles.loginContainer}>
      <Card>
        <h1>Register</h1>
        <div className={styles.welcomeWrapper}>
          <h3>Manage all your projects efficiently</h3>
          <p className={styles.welcomeText}>
            Lets get you all set up so you can verify your personal account and
            begin setting up your profile🚀
          </p>
        </div>
        <form className={styles.form}>
          <div className={cls(styles.formGroup, styles.mgBottom)}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <TextInput
              type="text"
              className="input"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="full name"
            />
          </div>
          <div className={cls(styles.formGroup, styles.mgBottom)}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <TextInput
              type="text"
              className="input"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="example@email.com"
            />
          </div>
          <div className={cls(styles.formGroup, styles.mgBottom)}>
            <label htmlFor="username" className={styles.formLabel}>
              Username
            </label>
            <TextInput
              type="text"
              className="input"
              id="username"
              name="username"
              autoComplete="off"
              placeholder="username"
            />
          </div>
          <div className={cls(styles.formGroup, styles.mgBottom)}>
            <label htmlFor="password" className={styles.formLabel}>
              Password
            </label>
            <TextInput
              type="password"
              className="input"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="password"
            />
          </div>
          <Button>Register</Button>
        </form>
        <span className={styles.register}>
          Already have an account?{" "}
          <Link href="/login" passHref>
            <a className={styles.link}>Log in</a>
          </Link>
        </span>
      </Card>
    </div>
  );
};

export default Register;
