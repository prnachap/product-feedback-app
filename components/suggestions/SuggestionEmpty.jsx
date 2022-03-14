import Image from "next/image";
import React from "react";
import styles from "./SuggestionEmpty.module.scss";
import PlusIcon from "../../public/assets/shared/icon-plus.svg";
import Button from "../../ui/button/Button";

const SuggestionEmpty = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/assets/suggestions/illustration-empty.svg"
        alt="person with a microscope wearing a detective clothing"
        height="108"
        width="102"
      />
      <h1>There is no feedback yet.</h1>
      <p className={styles.description}>
        Got a suggestion? Found a bug that needs to be squashed?we love hearing
        about new ideas to improve our app
      </p>
      <Button>
        <PlusIcon /> Add Feedback
      </Button>
    </div>
  );
};

export default SuggestionEmpty;
