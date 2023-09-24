import { useState } from "react";

const Search = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState("");

    const fetchData = (value) => {
      fetch("https://dummyjson.com/products?limit=10")
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          const results = json.products.filter((products) => {
            return (
              value &&
              products &&
              products.title &&
              products.title.toLowerCase().includes(value)
              );
            });
            setResults(results);
            console.log(results);
        });
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  
    return (
      <div className="input-wrapper">
       
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
}
export default Search;