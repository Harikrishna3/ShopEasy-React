import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        const results = json.filter((products) => {
          return (
            value &&
            products &&
            products.title &&
            products.title.toLowerCase().includes(value)
            );
          });
          setResults(results);
          // console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};