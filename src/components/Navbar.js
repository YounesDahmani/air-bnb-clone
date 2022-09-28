import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown((isShown) => !isShown);
  };

  let toggleClassCheck = isShown ? " active" : "";

  return (
    <div className={`navbar${toggleClassCheck}`}>
      <div className="navbar-container">
        <div className="logo-desktop">
          <img src="../assets/img/air-bnb-logo.png" alt="Logo Airbnb" />
        </div>

        {/* Middle feature  */}
        {isShown && (
          <div>
            <ul>
              <li>Logements</li>
              <li>Expériences</li>
              <li>Expériences en ligne</li>
            </ul>
          </div>
        )}
        <div className={`search-features${toggleClassCheck}`}>
          <div className="location-btn" onClick={handleClick}>
            N'importe où
          </div>
          <div className="day-btn">Une Semaine</div>
          <div className="travelers-btn">
            <span>Ajouter des voyageurs</span>{" "}
            <div className="icon-search">
              <SearchIcon />{" "}
            </div>
          </div>
        </div>
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
      {isShown && <div className="close" onClick={handleClick}></div>}
    </div>
  );
};

export default Navbar;
