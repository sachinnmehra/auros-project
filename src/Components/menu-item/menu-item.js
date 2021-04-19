import React from "react";
import "./menu-item.css";
import { withRouter } from "react-router-dom";
const menuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(menuItem);
