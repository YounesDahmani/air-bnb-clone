import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-desktop">
          <img src="../assets/img/air-bnb-logo.png" alt="Logo Airbnb" />
        </div>
        <div className="search-features">search features</div>
        <div className="user-features">
          <a href="https://www.google.com" className="hote-btn">
            Devenez hôte
          </a>
          <div className="language-icon">
            <LanguageIcon />
          </div>
          <div className="user-account-btn">
            <MenuIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
