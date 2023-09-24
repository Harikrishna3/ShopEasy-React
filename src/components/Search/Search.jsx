import { useState } from "react";

import "./Search.css";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultList";

const Search =()=> {
  const [results, setResults] = useState([]);
  return (
    <div className="Search">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default Search;