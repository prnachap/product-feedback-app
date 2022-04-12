import React, { useState, useMemo } from "react";
import ToggleSidebarContext from "./ToggleSidebarContext";

const ToggleProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => [open, setOpen], [open]);
  return (
    <ToggleSidebarContext.Provider value={value}>
      {children}
    </ToggleSidebarContext.Provider>
  );
};

export default ToggleProvider;
