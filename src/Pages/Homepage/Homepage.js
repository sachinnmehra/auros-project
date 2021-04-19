import React from "react";
import "./Homepage.css";
import Directory from "../../Components/directory/directory";
const homePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

export default homePage;
