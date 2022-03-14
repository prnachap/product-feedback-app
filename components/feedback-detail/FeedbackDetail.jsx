import React from "react";
import Button from "../../ui/button/Button";
import ChevronLeft from "../../public/assets/shared/icon-arrow-left.svg";
import styles from "./FeedbackDetail.module.scss";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getFeedbackById } from "../../services/getFeedbackById";
import Suggestion from "../suggestions/Suggestion";
import Link from "next/link";
import CommentList from "../comments/comment-list";

const FeedbackDetail = () => {
  const {
    query: { id },
  } = useRouter();

  const { isLoading, error, data } = useQuery(
    ["feedbackById", id],
    getFeedbackById,
    {
      select: (data) => data.data,
    }
  );
  return (
    <div>
      <nav className={styles.navigationWrapper}>
        <Link href="/" passHref>
          <Button variant="destructive">
            <ChevronLeft /> Go Back
          </Button>
        </Link>
        <Button variant="secondary">Edit Feedback</Button>
      </nav>
      <main>
        {isLoading && <div>is loading...</div>}
        {data && (
          <section className={styles.feedbackWrapper}>
            <Suggestion {...data} />
          </section>
        )}
        <section className={styles.commentWrapper}>
          <CommentList {...data} />
        </section>
      </main>
    </div>
  );
};

export default FeedbackDetail;
