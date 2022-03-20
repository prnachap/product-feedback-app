import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../ui/button/Button";

import AddComment from "../comments/add-comment";
import ChevronLeft from "../../public/assets/shared/icon-arrow-left.svg";
import CommentList from "../comments/comment-list";
import Suggestion from "../suggestions/Suggestion";
import { useQuery } from "react-query";
import { getFeedbackById } from "../../services/getFeedbackById";

import styles from "./FeedbackDetail.module.scss";

const FeedbackDetail = () => {
  const {
    query: { id },
    push,
  } = useRouter();

  const { isLoading, error, data } = useQuery(
    ["feedbackById", id],
    getFeedbackById,
    {
      select: (data) => data.data,
    }
  );

  const handleEditFeedback = () => {
    push(`/edit-feedback/${id}`);
  };

  return (
    <div>
      <nav className={styles.navigationWrapper}>
        <Link href="/" passHref>
          <Button variant="destructive">
            <ChevronLeft /> Go Back
          </Button>
        </Link>

        <Button variant="secondary" onClick={handleEditFeedback}>
          Edit Feedback
        </Button>
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
        <section>
          <AddComment {...data} />
        </section>
      </main>
    </div>
  );
};

export default FeedbackDetail;
