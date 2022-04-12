import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Sidebar from "../sidebar-desktop";
import SidebarMobile from "../sidebar-mobile";
import SuggestionBar from "../suggestion-bar";
import SuggestionList from "../suggestions/SuggestionList";

import { getCurrentUser } from "../../services/getCurrentUser";

// hooks
import { useAuthContext } from "../../hooks/useAuthContext";

// actions
import { setCurrentUser } from "../../context/authContext/authActions.js";

// Provider
import ToggleProvider from "../../context/toggle-sidebar/ToggleProvider";

const FeedbackDashboard = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useAuthContext();

  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("most upvotes");

  const { data, isLoading, error } = useQuery("current-user", getCurrentUser, {
    refetchOnWindowFocus: false,
    enabled: !currentUser,
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      setCurrentUser(dispatch, data.data.user);
    }
  }, [data, dispatch, error, isLoading]);

  return (
    <div className="container">
      <ToggleProvider>
        <Sidebar category={category} setCategory={setCategory} />
        <SidebarMobile category={category} setCategory={setCategory} />
      </ToggleProvider>
      <div className="suggestion">
        <SuggestionBar sortBy={sortBy} setSortBy={setSortBy} />
        <SuggestionList category={category} sortBy={sortBy} />
      </div>
    </div>
  );
};

export default FeedbackDashboard;
