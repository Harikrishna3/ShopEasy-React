import { useNavigate } from "react-router";
import "./SearchResult.css";
import { useEffect, useRef, useState } from "react";




export const SearchResult = ({ result, resultPR }) => {
  const Navigate = useNavigate();
 

  const navigateProductPage = (product) => {
   
  Navigate("/productPage", {
    state: {
      product: product,
    },
  })

}
console.log(result);
return (
  <div 
      className="search-result"
      onClick={(e) => 
        // alert(`You selected ${result}!`)
        navigateProductPage(resultPR)
        }
    >
      { result}
    </div>
  );
};