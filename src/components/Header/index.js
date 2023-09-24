import React from "react";
import header from "../../img/image 2.png";
import { NavLink } from "react-router-dom";

const HEader = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header-img">
            <img src={header} alt="" />
          </div>
          <div className="header-nav">
            <NavLink to={"/"}>Menu</NavLink>
            <NavLink to={"/order"}>Orders</NavLink>
            <NavLink to={"/admin"}>Admin</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HEader;
