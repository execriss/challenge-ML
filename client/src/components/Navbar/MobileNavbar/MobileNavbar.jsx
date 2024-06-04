import { GrClose } from "react-icons/gr";
import SearchInput from "../SearchInput/SearchInput";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineLocationMarker, HiOutlineShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./MobileNavbar.scss";
import { Link } from "react-router-dom";

const MobileNavbar = ({ burgerMenu, handleBurgerMenu }) => (
  <div>
    <div className="navbar-mobile-main-container">
      <Link to={"/"}>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.53-beta.0/mercadolibre/logo_large_25years_v2.png"
          alt="Logo de Mercado Libre"
          width={44}
        />
      </Link>
      <SearchInput mobile />
      {burgerMenu ? (
        <GrClose className="mobile-top-icon" onClick={handleBurgerMenu} />
      ) : (
        <GiHamburgerMenu
          className="mobile-top-icon"
          onClick={handleBurgerMenu}
        />
      )}
      <HiOutlineShoppingCart className="mobile-top-icon" />
    </div>
    <div>
      <div className="shipping-address-mobile">
        <div className="address-mobile">
          <HiOutlineLocationMarker />
          <p>Enviar a Mendoza</p>
        </div>
        <MdKeyboardArrowRight />
      </div>
    </div>
    {burgerMenu && <MobileMenu />}
  </div>
);

export default MobileNavbar;
