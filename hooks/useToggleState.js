import { useContext } from "react";
import ToggleSidebarContext from "../context/toggle-sidebar/ToggleSidebarContext";

export function useToggleState() {
  const context = useContext(ToggleSidebarContext);
  if (!context)
    throw new Error(`useToggleContext must be used within ToggleProvider`);
  return context;
}
