import React, { useState, useRef } from "react";
import cls from "classnames";
import Image from "next/image";

import Button from "../../../ui/button/Button";
import TextInput from "../../../ui/forms/text-input/TextInput";

import { CommentWrapper } from "./comment.style";
import { useContainerHeight } from "../../../hooks/useContainerHeight";

import styles from "./Comment.module.scss";

const Comment = (props) => {
  const {
    id,
    content,
    user: { image, name, username },
    replies,
  } = props;
  const [showTextInput, setShowTextInput] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(
    Array(replies?.length ?? 0).fill(false)
  );
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

  const handleShowRepliesInput = (index) => () => {
    const newState = showReplyInput.map((item, idx) => {
      return index === idx ? !item : item;
    });
    setShowReplyInput(newState);
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
                <button
                  className={styles.replyButton}
                  onClick={handleShowRepliesInput(index)}
                >
                  Reply
                </button>
                <p className={styles.description}>
                  <span className={styles.replyingTo}>{`@${replyingTo}`}</span>
                  {content}
                </p>
                {showReplyInput[index] && (
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
