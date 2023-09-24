import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
 
  console.log(results);
  return (
    <div className="results-list popout " >
      {results.map((result,id) => {
        return <SearchResult result={result.title} resultPR={result}key={id} />;
        //  <div key={id}>{result.name}</div>
      })}
     
    </div>
  );
};