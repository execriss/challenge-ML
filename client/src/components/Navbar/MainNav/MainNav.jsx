import { HiOutlineLocationMarker, HiOutlineShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./MainNav.scss";

const MainNav = () => {
  const ShippingAddress = () => (
    <a href="https://www.mercadolibre.com.ar/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fapple-iphone-se-2da-generacion-128-gb-negro-distribuidor-autorizado%2Fp%2FMLA1015591334">
      <div className="shipping-address">
        <HiOutlineLocationMarker className="address-icon" />
        <div className="container-address">
          <span className="send-to">Enviar a</span>
          <span className="address">Mendoza</span>
        </div>
      </div>
    </a>
  );

  return (
    <div className="navbar-main-container">
      <div className="navbar-shipping-and-buttons">
        <ShippingAddress />
        <ul className="navbar-buttons">
          <li>
            <div>
              Categorías
              <MdKeyboardArrowDown className="arrow-categoriesBtn" />
            </div>
          </li>
          <a href="https://www.mercadolibre.com.ar/ofertas#nav-header">
            <li>Ofertas</li>
          </a>
          <a href="https://www.mercadolibre.com.ar/gz/home/navigation#nav-header">
            <li>Historial</li>
          </a>
          <a href="https://www.mercadolibre.com.ar/ofertas/supermercado#nav-header">
            <li>Supermercado</li>
          </a>
          <a href="https://www.mercadolibre.com.ar/c/ropa-y-accesorios#nav-header">
            <li>Moda</li>
          </a>
          <a href="https://play.mercadolibre.com.ar/">
            <li>
              <div className="container-tag-mplay">
                <span className="tag-mplay">GRATIS</span>
                Mercado Play
              </div>
            </li>
          </a>
          <a href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWOzQ6CMAzH36Vnwu4cfQ1jljoKNnaMrNVJCO9uMfHYX_9fO0iZeYm2rQQDKIlAB6ugTaXmyKPDfCJlo_-JpwQrZjKqCsN-hsw0XshNZ8yEouQifNkjTlKas1-PM9ZIH_ctKLHR_c3k35-hg7m48GG26hBCa63PVBOORfheqU8l91iDbhyS9wRhNTg6b1OLVjE9YbD6og5GSsIL-fjr7fgCuQDYJ-MAAAA/notregistered">
            <li>Vender</li>
          </a>
          <a href="https://www.mercadolibre.com.ar/ayuda#nav-header">
            <li>Ayuda</li>
          </a>
        </ul>
      </div>
      <ul className="navbar-buttons">
        <li>
          <a href="https://www.mercadolibre.com.ar/hub/registration/landing?redirect_url=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fapple-iphone-se-2da-generacion-128-gb-negro-distribuidor-autorizado%2Fp%2FMLA1015591334#nav-header">
            Creá tu cuenta
          </a>
        </li>
        <li>
          <a href="https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWOSW7DMAxF76J1ZNdJA7Tetev2DAJt0TJRWRIous6A3L10gSz5h8d_NzEHSk6uBU1v8FIijSTmYEoEmTIvjrwaS1SpkuDzhD0CDAsKcjX9fQcF9J-opR01QayoIVhldlPMm2r_v1Sj6vCivQTRbTj8Eu7usxGyHrNIqX3bbtvWLMgj-BxpYGzGvDTALZQS0VKZc0Jb0R492IAJGUbKyXbHNxsGmzBwtp6qMA0r-cxW92Smm_La0n5_fXQv3fn83p1Or-Zx0A1VnCjkx_TCKz7-AMVeG_khAQAA/user">
            Ingresá
          </a>
        </li>
        <li>
          <a href="https://myaccount.mercadolibre.com.ar/purchases/list#nav-header">
            Mis compras
          </a>
        </li>
        <a href="https://www.mercadolibre.com.ar/gz/cart/v2">
          <HiOutlineShoppingCart className="cart-icon" />
        </a>
      </ul>
    </div>
  );
};
export default MainNav;
