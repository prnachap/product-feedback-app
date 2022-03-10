import React, { useState } from "react";
import ToggleSidebarContext from "../../context/toggle-sidebar-context/ToggleSidebarContext";

import Sidebar from "../sidebar-desktop";
import SidebarMobile from "../sidebar-mobile";

const FeedbackDashboard = () => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  const handleMobileSidebar = () => setOpenMobileSidebar(!openMobileSidebar);

  return (
    <ToggleSidebarContext.Provider
      value={{ openMobileSidebar, handleMobileSidebar }}
    >
      <div className="container">
        <Sidebar />
        {<SidebarMobile />}
        <div className="suggestion"></div>
      </div>
    </ToggleSidebarContext.Provider>
  );
};

export default FeedbackDashboard;
