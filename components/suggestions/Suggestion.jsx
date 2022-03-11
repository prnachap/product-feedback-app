import React from "react";
import Image from "next/image";

import ArrowUp from "../../public/assets/shared/icon-arrow-up.svg";
import Card from "../../ui/card/Card";
import Pill from "../../ui/pill/Pill";

import styles from "./Suggestion.module.scss";

const Suggestion = (props) => {
  const { title, description, category, upvotes, comments } = props;
  return (
    <article>
      <Card className={styles.suggestion}>
        <Pill className={styles.votes}>
          <ArrowUp /> <span className={styles.category}>{upvotes}</span>
        </Pill>
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <Pill className={styles.noHover}>
            <span>{category}</span>
          </Pill>
        </div>
        <div className={styles.commentWrapper}>
          <Image
            src="/assets/shared/icon-comments.svg"
            alt="comments"
            height="16px"
            width="18px"
          />
          <span className={styles.comment}>{comments?.length ?? 0}</span>
        </div>
      </Card>
    </article>
  );
};

export default Suggestion;
