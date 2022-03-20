import React, { useState } from "react";
import { useRouter } from "next/router";

import Button from "../../../ui/button/Button";
import Card from "../../../ui/card/Card";
import Select from "../../../ui/forms/select/Select";
import TextInput from "../../../ui/forms/text-input/TextInput";

import LeftChevron from "../../../public/assets/shared/icon-arrow-left.svg";
import EditFeedbackIcon from "../../../public/assets/shared/icon-edit-feedback.svg";
import { getOptionsForDropdown } from "../../../utils";
import { typeList } from "../../../constants";

import styles from "./EditFeedback.module.scss";

const categoryOptions = typeList["filterBy"];
const statusOptions = typeList["status"];

const EditFeedback = () => {
  const [formState, setFormState] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    titleError: "",
    categoryError: "",
    descriptionError: "",
  });

  const { title, category, description } = formState;
  const { titleError, categoryError, descriptionError } = formErrors;
  const { push, back } = useRouter();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category && description) {
      setFormErrors({
        ...formErrors,
        titleError: "",
        descriptionError: "",
        categoryError: "",
      });
    } else {
      let allErrors = {};
      Object.keys(formState).forEach((key) => {
        formState[key] === ""
          ? (allErrors[`${key}Error`] = "Can't be empty")
          : (allErrors[`${key}Error`] = "");
      });
      setFormErrors({ ...formErrors, ...allErrors });
    }
  };

  const handleBack = () => back();

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <Button variant="destructive" onClick={handleBack}>
          <LeftChevron />
          <span className={styles.backButton}>Go back</span>
        </Button>
      </div>
      <Card>
        <EditFeedbackIcon className={styles.feedbackIcon} />
        <h1 className={styles.title}>Create New Feedback</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <h4 className={styles.subTitle}>Feedback Title</h4>
            <span className={styles.description}>
              Add a short,descriptive headline
            </span>
            <TextInput
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
              error={titleError}
            />
          </div>
          <div className={styles.formGroup}>
            <h4 className={styles.subTitle}>Category</h4>
            <span className={styles.description}>
              Choose a category for your feedback
            </span>
            <Select
              options={getOptionsForDropdown(categoryOptions)}
              value={category}
              onChange={handleChange}
              name="category"
              error={categoryError}
            />
          </div>
          <div className={styles.formGroup}>
            <h4 className={styles.subTitle}>Update Status</h4>
            <span className={styles.description}>Change feature state</span>
            <Select
              options={getOptionsForDropdown(statusOptions)}
              value={category}
              onChange={handleChange}
              name="category"
              error={categoryError}
            />
          </div>
          <div className={styles.formGroup}>
            <h4 className={styles.subTitle}>Feedback Detail</h4>
            <span className={styles.description}>
              Include any specific comments on what should be improved, added,
              etc.
            </span>
            <TextInput
              type="text-area"
              rows="3"
              name="description"
              value={description}
              error={descriptionError}
              onChange={handleChange}
            />
          </div>
          <div className={styles.footerBtnWrapper}>
            <div className={styles.deleteBtnWrapper}>
              <Button variant="danger">Delete</Button>
            </div>
            <div className={styles.saveBtnWrapper}>
              <Button variant="dark" type="button" onClick={() => push("/")}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EditFeedback;
