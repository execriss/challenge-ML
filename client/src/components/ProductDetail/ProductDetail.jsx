import ProductPrice from "../ProductPrice/ProductPrice";
import "./ProductDetail.scss";

export const ProductDetail = ({ item }) => {
  if (!item) return <div></div>;

  const formatDescription = (description) => {
    return description
      .split(/(\r\n|\n|\r)/gm)
      .map((part, index) =>
        part.match(/(\r\n|\n|\r)/) ? <br key={index} /> : part
      );
  };

  return (
    <article className="meli-item-details">
      <div className="meli-grid">
        <div className="meli-column-picture">
          <img src={item.picture} alt={item.title} />
        </div>

        <div className="meli-column-details">
          <ProductPrice item={item} />
        </div>
      </div>

      <div className="meli-description">
        <h2>Descripción del producto</h2>
        <div>{formatDescription(item.description)}</div>
      </div>
    </article>
  );
};

export default ProductDetail;
