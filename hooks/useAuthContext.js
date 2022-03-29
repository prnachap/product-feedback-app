import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "useAuthContext should be used within <AuthState> component"
    );
  return context;
};
