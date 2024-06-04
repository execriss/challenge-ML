import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./SearchInput.scss";

const SearchInput = ({ mobile }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      navigate(`/items?search=${encodeURIComponent(inputValue)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        mobile ? "search-input-container-mobile" : "search-input-container"
      }
    >
      <AiOutlineSearch
        className={mobile ? "search-icon-mobile" : "search-icon"}
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={mobile ? "search-input-mobile" : "search-input"}
        placeholder={mobile ? "Buscar..." : "Buscar productos, marcas y más..."}
      />
    </form>
  );
};

export default SearchInput;
