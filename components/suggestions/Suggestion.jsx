import React, { useEffect } from "react";
import Image from "next/image";

import ArrowUp from "../../public/assets/shared/icon-arrow-up.svg";
import Card from "../../ui/card/Card";
import Pill from "../../ui/pill/Pill";

import styles from "./Suggestion.module.scss";
import { useQuery } from "react-query";
import { updateVotes } from "../../services/updateVotes";
import useFeedBackContext from "../../hooks/useFeedBackContext";
import Link from "next/link";

const Suggestion = (props) => {
  const { id, title, description, category, upvotes, comments, index } = props;
  const { updateVote } = useFeedBackContext();

  const { data, refetch } = useQuery(["upVotes", id, upvotes], updateVotes, {
    enabled: false,
  });

  useEffect(() => {
    if (data) {
      updateVote(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <article>
      <Card className={styles.suggestion}>
        <Pill className={styles.votes} onClick={() => refetch()}>
          <ArrowUp /> <span className={styles.category}>{upvotes}</span>
        </Pill>
        <div className={styles.contentWrapper}>
          <Link href={`/${id}`} passHref>
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
