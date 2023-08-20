import "./Homepage.css";
import React, { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import 'react-lazy-load-image-component/src/effects/blur.css';

import { ColorRing, FallingLines, InfinitySpin, TailSpin } from "react-loader-spinner";
const TopProducts = React.lazy(()=>import("../TopProducts/TopProducts"));
const Filter = React.lazy(()=>import("../Filter/Filter")) ;

const LoaderComp = () => {
 
  return (
    

    <InfinitySpin
    width='200'
    color="black"
  />
      
  );
}

const Homepage = () => {

  return (
    <div className="App1">
      {/* <Navbar /> */}
      <LazyLoadImage src={"photos/50off.png"}
    
    PlaceholderSrc={"photos/50off_x.png"}
    effect="blur"
    style={{
      width: "80%",
      position: "relative",
      left: "50%",
      marginTop: "20px",
      marginLeft: "-40%",
      zIndex: "1",
      borderRadius: "25px",
      border: "2px solid black",
    }}
    alt="heropage"
/>
      {/* <img
        style={{
          width: "80%",
          position: "relative",
          left: "50%",
          marginTop: "20px",
          marginLeft: "-40%",
          zIndex: "1",
          borderRadius: "25px",
          border: "2px solid black",
        }}
        src="photos/50off.png"

        alt="heropage"
        srcset=""
      /> */}
<Suspense fallback={ <LoaderComp/>}>

          <TopProducts />

</Suspense>
          <hr className="hr-product" />
          <Suspense fallback={<LoaderComp/>}>
          <Filter />
          </Suspense>
 
    </div>
  );
};
export default Homepage;
