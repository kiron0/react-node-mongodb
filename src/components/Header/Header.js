import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/users">Users</CustomLink>
        <CustomLink to="/user/add">Add User</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
