import React from "react";
import cls from "classnames";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as yup from "yup";

import Button from "../../../ui/button/Button";
import Card from "../../../ui/card/Card";
import TextInput from "../../../ui/forms/text-input/TextInput";

import styles from "./Login.module.scss";
import { login } from "../../../services/login";
import { useSaveToken } from "../../../hooks/useSaveToken";
import Alert from "../../../ui/alert/Alert";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().required("Can't be empty").email("Invalid Email"),
  password: yup
    .string()
    .required("Can't be empty")
    .min(8, "Password should have minimum of 8 characters"),
});

const Login = () => {
  const { mutate, isLoading, isError } = useSaveToken(login);
  const handleSubmit = (values) => {
    mutate(values);
  };
  return (
    <div className={styles.loginContainer}>
      {isError && (
        <div className={styles.alertWrapper}>
          <Alert variant="danger" withIcon>
            Invalid Credential
          </Alert>
        </div>
      )}
      <Card>
        <div className={styles.welcomeWrapper}>
          <h3>Login to your account</h3>
          <p className={styles.welcomeText}>Thank you for getting back 🛩️</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <div className={cls(styles.formGroup, styles.mgBottom)}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <TextInput
                type="email"
                className="input"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="example@email.com"
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
                autoComplete="off"
                placeholder="password"
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
          </Form>
        </Formik>
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
