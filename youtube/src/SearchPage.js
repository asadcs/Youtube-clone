import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";

export const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>

      <hr />
    </div>
  );
};
