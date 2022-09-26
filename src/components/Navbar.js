import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = (id) => {
  const useOutsideClick = (callback) => {
    const ref = React.useRef();

    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("click", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }, [ref]);

    return ref;
  };

  const [isShown, setIsShown] = useState(false);

  const handleClickOutside = () => {
    console.log("c'est dehoooors");
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleClick = () => {
    setIsShown((isShown) => !isShown);
  };

  const handleHeaderClick = (event) => {
    // do something

    event.stopPropagation();
  };

  let toggleClassCheck = isShown ? " active" : "";

  return (
    <div className={`navbar${toggleClassCheck}`} onClick={handleHeaderClick}>
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
    </div>
  );
};

export default Navbar;
