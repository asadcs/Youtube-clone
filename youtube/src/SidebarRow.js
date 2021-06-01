import React from "react";
import "./SidebarRow.css";
export const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      {/* <Icon className={`sidebarRow__icon ${selected && "selected"}`} /> */}
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebar__title">{title}</h2>
    </div>
  );
};
