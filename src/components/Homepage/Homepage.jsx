import Navbar from "../Navbar/Navbar";
import TopProducts from "../TopProducts/TopProducts";
import "./Homepage.css";
import Filter from "../Filter/Filter";

const Homepage = () => {

  return (
    <div className="App1">
      {/* <Navbar /> */}
      <img
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
      />
      <TopProducts />

      <hr className="hr-product" />

      <Filter />
    </div>
  );
};
export default Homepage;
