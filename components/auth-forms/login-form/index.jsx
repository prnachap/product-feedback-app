import React, { useState, useEffect } from "react";
import cls from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "../../../ui/button/Button";
import Card from "../../../ui/card/Card";
import TextInput from "../../../ui/forms/text-input/TextInput";

import styles from "./Login.module.scss";
import { useQuery } from "react-query";
import { login } from "../../../services/login";
import { useRouter } from "next/router";
import Loader from "../../../ui/loader/Loader";

const Login = () => {
  const { push } = useRouter();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const { email, password } = formState;
  const { emailError, passwordError } = formErrors;

  const { data, error, isLoading, refetch } = useQuery(
    ["login", { ...formState }],
    login,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (!isLoading && !error && data) {
      localStorage.setItem("token", JSON.stringify(data.data.token));
      push("/");
    }
  }, [data, error, isLoading, push]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setFormErrors({ ...formErrors, emailError: "", passwordError: "" });
      refetch();
    } else {
      let allErrors = {};
      Object.keys(formState).forEach((key) => {
        return !formState[key]
          ? (allErrors[`${key}Error`] = "can't be empty")
          : (allErrors[`${key}Error`] = "");
      });
      setFormErrors({ ...formErrors, ...allErrors });
    }
  };
  return (
    <div className={styles.loginContainer}>
      <Card>
        <div className={styles.welcomeWrapper}>
          <h3>Login to your account</h3>
          <p className={styles.welcomeText}>Thank you for getting back 🛩️</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={cls(styles.formGroup, styles.mgBottom)}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <TextInput
              type="email"
              className="input"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="example@email.com"
              error={emailError}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>
              Password
            </label>
            <TextInput
              type="password"
              className="input"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              autoComplete="off"
              placeholder="password"
              error={passwordError}
            />
          </div>
          <div className={styles.resetWrapper}>
            <div className={styles.rememberWrapper}>
              <input type="checkbox" id="check" className={styles.checkbox} />
              <label htmlFor="check">Remember me</label>
            </div>
            <Link href={"/forgot-password"} passHref>
              <a className={styles.link}>Forget password?</a>
            </Link>
          </div>
          <Button type="submit" isLoading={isLoading}>
            Login
          </Button>
        </form>
        <p className="error">Invalid Credentials</p>
        <span className={styles.register}>
          Dont have an account yet?{" "}
          <Link href="/register" passHref>
            <a className={styles.link}>Register Now🚀</a>
          </Link>
        </span>
      </Card>
    </div>
  );
};

export default Login;
