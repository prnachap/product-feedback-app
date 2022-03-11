import { useContext } from "react";
import SelectContext from "../context/select/SelectContext";

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(
      "useSelectContext should be used within <CustomSelect/> component"
    );
  }
  return context;
};
