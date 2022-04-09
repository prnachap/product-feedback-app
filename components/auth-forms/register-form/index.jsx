import React from "react";
import cls from "classnames";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as yup from "yup";

import Alert from "../../../ui/alert/Alert";
import Button from "../../../ui/button/Button";
import Card from "../../../ui/card/Card";
import TextInput from "../../../ui/forms/text-input/TextInput";

import styles from "../login-form/Login.module.scss";
import { useSaveToken } from "../../../hooks/useSaveToken";
import { signUp } from "../../../services/signup";

const initialValues = {
  name: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Can't be empty"),
  email: yup.string().required("Can't be empty").email("Invalid email"),
  username: yup
    .string()
    .required("Can't be empty")
    .max(16, "username cannot be more than 16 characters"),
  password: yup
    .string()
    .required("Can't be empty")
    .min(8, "Password should contain minimum of 8 characters"),
  confirmPassword: yup
    .string()
    .required("Can't be empty")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

const Register = () => {
  const { mutate, isLoading, isError } = useSaveToken(signUp);

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
        <h1>Register</h1>
        <div className={styles.welcomeWrapper}>
          <h3>Manage all your projects efficiently</h3>
          <p className={styles.welcomeText}>
            Lets get you all set up so you can verify your personal account and
            begin setting up your profile🚀
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
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
            <div className={cls(styles.formGroup, styles.mgBottom)}>
              <label htmlFor="confirmPassword" className={styles.formLabel}>
                Confirm Password
              </label>
              <TextInput
                type="password"
                className="input"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="off"
                placeholder="confirm password"
              />
            </div>
            <Button type="submit" isLoading={isLoading}>
              Register
            </Button>
          </Form>
        </Formik>
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
