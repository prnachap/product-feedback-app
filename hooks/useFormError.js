import { useState } from "react";

export const useFormError = () => {
  const [error, setError] = useState("");
  return [error, setError];
};
