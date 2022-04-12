import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../../ui/card/Card";
import Pill from "../../ui/pill/Pill";

import ArrowUp from "../../public/assets/shared/icon-arrow-up.svg";
import { useQuery } from "react-query";
import { updateVotes } from "../../services/updateVotes";
import useFeedBackContext from "../../hooks/useFeedBackContext";
import { updateVote } from "../../context/feedback/feedbackAction";

import styles from "./Suggestion.module.scss";
import { useUpdateVotes } from "../../hooks/useFeedbackData";
import Alert from "../../ui/alert/Alert";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Suggestion = (props) => {
  const { _id, title, description, category, upvotes, comments } = props;

  const { mutate } = useUpdateVotes();

  const handleAddVotes = (id) => {
    mutate(id);
  };

  return (
    <article>
      <Card className={styles.suggestion} variants={cardVariants}>
        <Pill className={styles.votes} onClick={() => handleAddVotes(_id)}>
          <ArrowUp />{" "}
          <span className={styles.category}>{upvotes?.length ?? 0}</span>
        </Pill>
        <div className={styles.contentWrapper}>
          <Link href={`/feedback/${_id}`} passHref>
            <h3 className={styles.title}>{title}</h3>
          </Link>
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
