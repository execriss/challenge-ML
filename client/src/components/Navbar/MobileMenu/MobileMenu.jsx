import { AiOutlineClockCircle, AiOutlineUnorderedList } from "react-icons/ai";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import {
  MdOutlineHeadsetMic,
  MdOutlineLocalOffer,
  MdOutlineStorefront,
} from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import "./MobileMenu.scss";

const MobileMenu = () => {
  const mainMenuItems = [
    { Icon: GrHomeRounded, text: "Inicio", href: "/" },
    {
      Icon: MdOutlineLocalOffer,
      text: "Ofertas",
      href: "https://www.mercadolibre.com.ar/ofertas#nav-header",
    },
    {
      Icon: AiOutlineClockCircle,
      text: "Historial",
      href: "https://www.mercadolibre.com.ar/gz/home/navigation#nav-header",
    },
    {
      Icon: MdOutlineHeadsetMic,
      text: "Ayuda",
      href: "https://www.mercadolibre.com.ar/ayuda#nav-header",
    },
  ];

  const supermarketItems = [
    {
      Icon: BiShoppingBag,
      text: "Supermercado",
      href: "https://www.mercadolibre.com.ar/ofertas/supermercado#nav-header",
    },
    {
      Icon: IoShirtOutline,
      text: "Moda",
      href: "https://www.mercadolibre.com.ar/c/ropa-y-accesorios#nav-header",
    },
    {
      Icon: MdOutlineStorefront,
      text: "Tiendas oficiales",
      href: "https://www.mercadolibre.com.ar/tiendas-oficiales",
    },
    { Icon: AiOutlineUnorderedList, text: "Categorías", href: "/" },
  ];

  const accountItems = [
    {
      Icon: TiDocumentText,
      text: "Resumen",
      href: "https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWNSw6DMAxE75I1gj3LXiQywYBVh0SOaagQd69TieV83szlOK20e_1mdKPDMzMFUte5zKBLkuhptiCyWYUUHwmtAgIRFaW48WpDK84vNKhNLcAFrQSHbn7hVM37f5lHxeNp3A7sK04fwpY-xJpMbKq5jMNQa-0jSoA5MU2CfUixBxkEyxFxd3dnXFGvAuHtRpUD7x8H5vEe1QAAAA/user",
    },
    {
      Icon: GiReceiveMoney,
      text: "Vender",
      href: "https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWOzQ6CMAzH36Vnwu4cfQ1jljoKNnaMrNVJCO9uMfHYX_9fO0iZeYm2rQQDKIlAB6ugTaXmyKPDfCJlo_-JpwQrZjKqCsN-hsw0XshNZ8yEouQifNkjTlKas1-PM9ZIH_ctKLHR_c3k35-hg7m48GG26hBCa63PVBOORfheqU8l91iDbhyS9wRhNTg6b1OLVjE9YbD6og5GSsIL-fjr7fgCuQDYJ-MAAAA/notregistered",
    },
  ];

  const appItems = [{ Icon: HiDownload, text: "¡Comprá y vendé con la app!" }];
  const MenuSection = ({ items }) => {
    return (
      <ul>
        {items.map(({ Icon, text, href }, idx) => (
          <a key={idx} href={href}>
            <li>
              <Icon size={22} />
              {text}
            </li>
          </a>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <div className="welcome-container">
        <BiUser className="user-icon-mobile" />
        <div className="welcome-main">
          <h3>Bienvenido</h3>
          <h4>Ingresa a tu cuenta para ver tus compras, favoritos, etc.</h4>
          <div className="welcome-buttons-container">
            <button
              className="btn-blue"
              onClick={() =>
                window.location.replace(
                  "https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWOSW7DMAxF76J1ZNdJA7Tetev2DAJt0TJRWRIous6A3L10gSz5h8d_NzEHSk6uBU1v8FIijSTmYEoEmTIvjrwaS1SpkuDzhD0CDAsKcjX9fQcF9J-opR01QayoIVhldlPMm2r_v1Sj6vCivQTRbTj8Eu7usxGyHrNIqX3bbtvWLMgj-BxpYGzGvDTALZQS0VKZc0Jb0R492IAJGUbKyXbHNxsGmzBwtp6qMA0r-cxW92Smm_La0n5_fXQv3fn83p1Or-Zx0A1VnCjkx_TCKz7-AMVeG_khAQAA/user"
                )
              }
            >
              Ingresá
            </button>
            <button
              className="btn-outline-blue"
              onClick={() =>
                window.location.replace(
                  "https://www.mercadolibre.com.ar/hub/registration/landing?redirect_url=https%3A%2F%2Fwww.mercadolibre.com.ar%2Fapple-iphone-se-2da-generacion-128-gb-negro-distribuidor-autorizado%2Fp%2FMLA1015591334#nav-header"
                )
              }
            >
              Creá tu cuenta
            </button>
          </div>
        </div>
      </div>
      <div className="burger-list">
        <MenuSection items={mainMenuItems} />
        <MenuSection items={supermarketItems} />
        <MenuSection items={accountItems} />
        <MenuSection items={appItems} />
      </div>
    </div>
  );
};

export default MobileMenu;
