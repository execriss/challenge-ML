import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiTrophy } from "react-icons/bi";
import { HiOutlineTruck } from "react-icons/hi";
import { IoReturnDownBack, IoShieldCheckmarkOutline } from "react-icons/io5";
import { currencyFormat } from "../../helpers/currencyFormat";
import "./ProductPrice.scss";

const ProductPrice = ({ item }) => {
  const symbol = item.price.symbol || "$";
  const price = currencyFormat(item.price.amount, symbol);
  const condition = item.condition === "new" ? "Nuevo" : "Usado";
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => setFavorite((prevState) => !prevState);
  const paymentTwelveMonths = Math.trunc(item.price.amount / 12);

  return (
    <section className="product-details">
      <p className="sold-quantity">
        {condition} | {item.sold_quantity || 65} vendidos
      </p>

      <div className="product-title">
        <h1>{item.title}</h1>
        {favorite ? (
          <BsHeartFill className="fav-icon" onClick={handleFavorite} />
        ) : (
          <BsHeart className="fav-icon" onClick={handleFavorite} />
        )}
      </div>

      <div className="product-price">
        <h2>{price}</h2>

        <div className="payment-twelve-months">
          <p>en 12x $ {paymentTwelveMonths}</p>
        </div>
      </div>

      <div className="free-shipping-and-return">
        <div>
          <p>
            <HiOutlineTruck className="green-icon" />
            Llega gratis el <b>lunes</b>
          </p>
          <p className="blue-anchor">Ver más formas de entrega</p>
        </div>
      </div>

      <div className="free-shipping-and-return">
        <div>
          <p>
            <IoReturnDownBack className="green-icon" />
            Devolución gratis
          </p>
          <p className="thirty-days-text">
            Tenés 30 días desde que lo recibís.
          </p>
          <p className="blue-anchor">Conocer m&aacute;s</p>
        </div>
      </div>

      <button className="btn-blue product-details-btn mb-8px">
        Comprar ahora
      </button>
      <button className="btn-light-blue product-details-btn">
        Agregar al carrito
      </button>

      <div className="purchase-benefits">
        <div className="compra-protegida">
          <p>
            <span className="blue-anchor">
              <IoShieldCheckmarkOutline className="benefits-icon" />
              Compra Protegida,{" "}
            </span>
            recibí tu producto que esperabas o te devolvemos tu dinero.
          </p>
        </div>

        <div className="mercado-puntos">
          <p>
            <BiTrophy className="benefits-icon" />
            <span className="blue-anchor">Mercado Puntos. </span>Sumás 135
            puntos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPrice;
