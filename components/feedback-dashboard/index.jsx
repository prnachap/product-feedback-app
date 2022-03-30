import React, { useState, useEffect } from "react";

import Sidebar from "../sidebar-desktop";
import SidebarMobile from "../sidebar-mobile";
import SuggestionBar from "../suggestion-bar";
import SuggestionList from "../suggestions/SuggestionList";
import ToggleSidebarContext from "../../context/toggle-sidebar/ToggleSidebarContext";
import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/getCurrentUser";
import { useAuthContext } from "../../hooks/useAuthContext";
import { setCurrentUser } from "../../context/authContext/authActions.js";

const FeedbackDashboard = () => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  const {
    state: { currentUser },
    dispatch,
  } = useAuthContext();

  const { data, isLoading, error } = useQuery("current-user", getCurrentUser, {
    refetchOnWindowFocus: false,
    enabled: !currentUser,
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      setCurrentUser(dispatch, data.data.user);
    }
  }, [data, dispatch, error, isLoading]);

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
