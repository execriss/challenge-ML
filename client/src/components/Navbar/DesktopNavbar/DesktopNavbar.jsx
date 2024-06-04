import { Link } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import MainNav from "../MainNav/MainNav";
import "./DesktopNavbar.scss";

const DesktopNavbar = () => (
  <div className="main-header-container">
    <div className="navbar-search-container">
      <Link to={"/"}>
        <img
          src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.53-beta.0/mercadolibre/logo_large_25years_v2.png"
          alt="Logo de Mercado Libre"
          className="img-cursor"
        />
      </Link>
      <SearchInput />
      <a href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&me.audience=all&me.bu=9&me.bu_line=36&me.component_id=banner_menu_web_ml&me.content_id=ECOSYSTEM_LOYALTY_N6_BNR_MENU_3999&me.flow=146&me.logic=campaigns&me.position=0">
        <img
          src="https://http2.mlstatic.com/D_NQ_905051-MLA75975848536_052024-OO.webp"
          title="Por 3.999 pesos ¡Suscribite al nivel 6!, Disney+ y Star+ Incluídos"
          alt="Por 3.999 pesos ¡Suscribite al nivel 6!, Disney+ y Star+ Incluídos"
          width={340}
          height={39}
          className="img-cursor"
        />
      </a>
    </div>
    <MainNav />
  </div>
);

export default DesktopNavbar;
