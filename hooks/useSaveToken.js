import { useMutation } from "react-query";
import { useRouter } from "next/router";

export const useSaveToken = (fetcherFn) => {
  const { push } = useRouter();
  return useMutation(fetcherFn, {
    onSuccess: (data) => {
      localStorage.setItem("token", JSON.stringify(data.data.token));
      push("/");
    },
  });
};
