import React from "react";

import Card from "../../../ui/card/Card";
import Comment from "../comment";

import { getTotalComments } from "../../../utils";

import styles from "./CommentList.module.scss";

const Comments = (props) => {
  const { comments } = props;

  return (
    <Card>
      <h3 className={styles.comment}>{`${getTotalComments(
        comments
      )} comments`}</h3>
      <div className={styles.commentsContainer}>
        {comments &&
          comments.map((comment) => {
            return <Comment key={comment._id} {...comment} />;
          })}
      </div>
    </Card>
  );
};

export default Comments;
