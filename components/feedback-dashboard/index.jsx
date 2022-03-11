import React, { useState } from "react";
import ToggleSidebarContext from "../../context/toggle-sidebar/ToggleSidebarContext";

import Sidebar from "../sidebar-desktop";
import SidebarMobile from "../sidebar-mobile";
import SuggestionBar from "../suggestion-bar";
import SuggestionList from "../suggestions/SuggestionList";

const FeedbackDashboard = () => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  const handleMobileSidebar = () => setOpenMobileSidebar(!openMobileSidebar);

  return (
    <ToggleSidebarContext.Provider
      value={{ openMobileSidebar, handleMobileSidebar }}
    >
      <div className="container">
        <Sidebar />
        <SidebarMobile />
        <div className="suggestion">
          <SuggestionBar />
          <SuggestionList />
        </div>
      </div>
    </ToggleSidebarContext.Provider>
  );
};

export default FeedbackDashboard;
