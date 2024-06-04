import { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import "./Navbar.scss";

const Navbar = () => {
  const width = useWindowWidth();
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleBurgerMenu = () => {
    setBurgerMenu((prevState) => !prevState);
  };

  return (
    <nav
      className={`nav-navbar ${
        burgerMenu && width <= 1200 ? "burger-menu-on" : ""
      }`}
    >
      {width > 1200 ? (
        <DesktopNavbar />
      ) : (
        <MobileNavbar
          burgerMenu={burgerMenu}
          handleBurgerMenu={handleBurgerMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
