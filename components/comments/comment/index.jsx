import React, { useState, useRef } from "react";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as yup from "yup";

import Button from "../../../ui/button/Button";
import TextInput from "../../../ui/forms/text-input/TextInput";

import { CommentWrapper, Container } from "./comment.style";
import { useContainerHeight } from "../../../hooks/useContainerHeight";

import styles from "./Comment.module.scss";

const initialState = {
  userReply: "",
};

const validationSchema = yup.object({
  userReply: yup.string().required("Can't be empty"),
});

const Comment = (props) => {
  const {
    _id,
    content,
    user: { name, username },
    comments,
    replyingTo,
    type,
  } = props;

  const [showTextInput, setShowTextInput] = useState(false);

  const firstCommentRef = useRef("");
  const lastCommentRef = useRef("");

  const { firstReplyHeight, lastReplyHeight } = useContainerHeight(
    firstCommentRef,
    lastCommentRef
  );

  const nestedComments = comments?.length
    ? comments.map((comment) => {
        return (
          <Comment
            key={comment._id}
            {...comment}
            replyingTo={username}
            type="child"
          />
        );
      })
    : null;

  const handleReplies = (values) => {
    setShowTextInput(false);
  };
  return (
    <Container
      firstReplyHeight={firstReplyHeight}
      lastReplyHeight={lastReplyHeight}
      requiresTimeline={comments?.length && !type}
    >
      <CommentWrapper type={type}>
        <figure>
          <Image
            src={`/assets/user-images/image-${name
              .split(" ")[0]
              .toLowerCase()}.jpg`}
            alt={`photo`}
            height="40px"
            width="40px"
            className={styles.userImage}
          />
        </figure>

        <div className={styles.userDetailsWrapper}>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.userName}>{`@${username}`}</span>
        </div>
        <button
          className={styles.replyButton}
          onClick={() => setShowTextInput(!showTextInput)}
        >
          Reply
        </button>

        <p className={styles.description} ref={lastCommentRef}>
          {replyingTo && (
            <span className={styles.replyingTo}>{`@${replyingTo}`}</span>
          )}
          {content}
        </p>
        {showTextInput && (
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleReplies}
          >
            <Form className={styles.inputWrapper}>
              <TextInput
                name="userReply"
                id="reply"
                cols="20"
                rows="4"
                className={styles.textInput}
              />
              <Button className={styles.postButton} type="submit">
                Post Reply
              </Button>
            </Form>
          </Formik>
        )}
      </CommentWrapper>
      {nestedComments}
    </Container>
  );
};

export default Comment;
