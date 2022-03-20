import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Button from "../../../ui/button/Button";
import Card from "../../../ui/card/Card";
import TextInput from "../../../ui/forms/text-input/TextInput";

import { useFormError } from "../../../hooks/useFormError";
import { addComment } from "../../../services/addComment";
import { getRemainingCharacters } from "../../../utils";

import styles from "./AddComment.module.scss";

const AddComment = (props) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useFormError();
  const {
    query: { id },
  } = useRouter();

  const {
    data,
    error: failed,
    refetch,
  } = useQuery(
    [
      "add-comment",
      id,
      { previousComments: props.comments, newComment: textInput },
    ],
    addComment,
    {
      enabled: false,
    }
  );

  const handleTextInput = (e) => {
    if (e.target.value.length <= 250) {
      setTextInput(e.target.value);
    }
    if (error && e.target.value) {
      setError("");
    }
  };

  const handleClick = () => {
    refetch();
    if (!textInput) {
      setError("Can't be empty");
    } else {
      if (!failed) {
      }
      setError("");
    }
  };

  return (
    <Card>
      <h3 className={styles.title}>Add comment</h3>
      <TextInput
        rows="4"
        value={textInput}
        onChange={handleTextInput}
        placeholder="Type your comment here"
        error={error}
      />
      <div className={styles.wrapper}>
        <span className={styles.characterLimit}>{`${getRemainingCharacters(
          textInput
        )} Characters left`}</span>
        <Button onClick={handleClick}>Post Comment</Button>
      </div>
    </Card>
  );
};

export default AddComment;
