import React from "react";
import Card from "../../../ui/card/Card";

import styles from "./CommentList.module.scss";
import Comment from "../comment";

const Comments = (props) => {
  const { comments } = props;
  return (
    <Card>
      <h3 className={styles.comment}>4 comments</h3>
      {comments &&
        comments.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })}
    </Card>
  );
};

export default Comments;
