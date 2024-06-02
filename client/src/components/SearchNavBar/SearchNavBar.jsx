import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchNavBar.scss";

const SearchNavBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") navigate(`/items?search=${decodeURI(inputValue)}`);
    else navigate("/");
  };

  return (
    <header className="meli-search-navbar">
      <div className="meli-container">
        <div className="meli-grid meli-flex-middle">
          <div className="meli-width-auto">
            <a className="meli-search-navbar-logo" href="/">
              <img
                src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.53-beta.0/mercadolibre/logo_large_25years_v2.png"
                alt="Mercadolibre"
                height="34"
                width="134"
              />
            </a>
          </div>
          <div className="meli-width-expand">
            <div>
              <form className="meli-search-navbar-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Buscar productos, marcas y más..."
                  className="meli-search-input"
                />
                <button className="meli-search-button" type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchNavBar;
