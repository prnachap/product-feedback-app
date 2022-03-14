import React, { useState, useRef, useEffect } from "react";
import Card from "../../../ui/card/Card";
import Button from "../../../ui/button/Button";
import cls from "classnames";

import styles from "./Comment.module.scss";
import Image from "next/image";
import TextInput from "../../../ui/forms/text-input/TextInput";

import styled from "styled-components";
import { CommentWrapper } from "./comment.style";
import { useContainerHeight } from "../../../hooks/useContainerHeight";

const Comment = (props) => {
  const {
    id,
    content,
    user: { image, name, username },
    replies,
  } = props;
  const [showTextInput, setShowTextInput] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const replyContainerRef = useRef("");
  const firstReplyContainerRef = useRef("");

  const { firstReplyHeight, lastReplyHeight } = useContainerHeight(
    firstReplyContainerRef,
    replyContainerRef
  );

  const handleChange = (event) => {
    setText(event.target.value);

    if (error && event.target.value.length) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      setError("Can't be empty");
    } else {
      setError("");
      setShowTextInput(false);
    }
  };

  const handleShowForm = () => {
    setShowTextInput(true);
  };

  return (
    <CommentWrapper
      firstReplyHeight={firstReplyHeight}
      lastReplyHeight={lastReplyHeight}
      className={replies && replies.length > 1 ? "timeline" : ""}
    >
      <figure className={styles.imageWrapper}>
        <Image
          src={`${image.replace(".", "")}`}
          alt={`${name}-photo`}
          height="40px"
          width="40px"
          className={styles.userImage}
        />
      </figure>

      <div className={styles.userDetailsWrapper}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.userName}>{`@${username}`}</span>
      </div>
      <button className={styles.replyButton} onClick={handleShowForm}>
        Reply
      </button>
      <p className={styles.description} ref={firstReplyContainerRef}>
        {content}
      </p>
      {showTextInput && (
        <form className={styles.inputWrapper} onSubmit={handleSubmit}>
          <TextInput
            name="user-reply"
            value={text}
            onChange={handleChange}
            id="reply"
            cols="20"
            rows="4"
            className={styles.textInput}
            error={error}
          />
          <Button className={styles.postButton} type="submit">
            Post Reply
          </Button>
        </form>
      )}
      {/* nested replies */}
      {replies?.length &&
        replies.map(
          ({ content, replyingTo, user: { image, name, username } }, index) => {
            return (
              <div
                className={cls(styles.commentWrapper, styles.replyWrapper)}
                ref={replyContainerRef}
                key={`${name}-${index}`}
              >
                <figure className={styles.imageWrapper}>
                  <Image
                    src={`${image.replace(".", "")}`}
                    alt={`${name}-photo`}
                    height="40px"
                    width="40px"
                    className={styles.userImage}
                  />
                </figure>

                <div className={styles.userDetailsWrapper}>
                  <h4 className={styles.name}>{name}</h4>
                  <span className={styles.userName}>{`@${username}`}</span>
                </div>
                <button className={styles.replyButton} onClick={handleShowForm}>
                  Reply
                </button>
                <p className={styles.description}>
                  <span className={styles.replyingTo}>{`@${replyingTo}`}</span>
                  {content}
                </p>
                {showTextInput && (
                  <form className={styles.inputWrapper} onSubmit={handleSubmit}>
                    <TextInput
                      name="user-reply"
                      value={text}
                      onChange={handleChange}
                      id="reply"
                      cols="20"
                      rows="4"
                      className={styles.textInput}
                      error={error}
                    />
                    <Button className={styles.postButton} type="submit">
                      Post Reply
                    </Button>
                  </form>
                )}
              </div>
            );
          }
        )}
    </CommentWrapper>
  );
};

export default Comment;
