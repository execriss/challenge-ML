import useSEO from "../../hooks/useSEO.jsx";
import meli from "../../assets/images/meli.png";
import ShoppingImage from "../../components/ShoppingImage/ShoppingImage.jsx";
import "./Home.scss";

const Home = () => {
  const title = "Mercado libre Argentina - Envíos Gratis en el día";
  const description =
    "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.";
  const ogTitle = "Mercado libre Argentina - Envíos Gratis en el día";
  const ogDescription =
    "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.";
  const ogImage = meli;
  useSEO({ title, description, ogTitle, ogImage, ogDescription });

  return (
    <>
      <main className="meli-page-home">
        <div className="shoppingImage-container">
          <div className="shoppingImage-container-item">
            <ShoppingImage />
            <h2>¡Bienvenido a Mercado Libre!</h2>
            <p>
              Nos alegra tenerte aquí. Para encontrar los productos que deseas,
              simplemente utiliza el buscador ubicado en la parte superior de la
              página. Navega entre miles de opciones y descubre todo lo que
              tenemos para ofrecerte. ¡Feliz compra!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
