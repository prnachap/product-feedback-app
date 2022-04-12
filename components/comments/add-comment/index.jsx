import React from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import * as yup from "yup";

import Button from "../../../ui/button/Button";
import Card from "../../../ui/card/Card";
import TextInput from "../../../ui/forms/text-input/TextInput";

import { getRemainingCharacters } from "../../../utils";
import { useAddComments } from "../../../hooks/useFeedbackData";

import styles from "./AddComment.module.scss";

const initialState = {
  comment: "",
};

const validationSchema = yup.object({
  comment: yup.string().required("can't be empty"),
});

const AddComment = (props) => {
  const {
    query: { id },
  } = useRouter();

  const { mutate } = useAddComments();

  const handleNewComment = (values, { resetForm }) => {
    mutate({ id, content: values });
    resetForm({ comment: "" });
  };

  return (
    <Card>
      <h3 className={styles.title}>Add comment</h3>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={handleNewComment}
      >
        {(values) => (
          <Form>
            <TextInput
              rows="4"
              name="comment"
              placeholder="Type your comment here"
            />
            <div className={styles.wrapper}>
              <span
                className={styles.characterLimit}
              >{`${getRemainingCharacters(
                values.values.comment
              )} Characters left`}</span>
              <Button type="submit">Post Comment</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default AddComment;
