import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import TopProducts from "../TopProducts/TopProducts";
import "./Homepage.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { add } from "../../store/cartSlice";
import { Button } from "react-bootstrap";
import Filter from "../Filter/Filter";

const Homepage = () => {
  const [products1, setProducts1] = useState([]);
  const Dispatch = useDispatch();

  const fetchInfo = async () => {
    // return axios
    // .get("https://fakestoreapi.com/products")
    // .then((res) => setProducts1(res.data))

    return axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts1(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleAddtoCart = (product) => {
    Dispatch(add(product));
  };

  return (
    <div className="App1">
      {/* <h1>Homepage</h1> */}
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
          // marginRight: "auto",
        }}
        src="/photos/50off.png"
        alt="heropage"
        srcset=""
      />
      <TopProducts />

      <hr className="hr-product" />

      {/* <!-- Products --> */}
      {/* <section>
        <div className="text-center">
          <div className="row products-page">
            {products1.map((product) => (
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light h-100 "
                    data-mdb-ripple-color="light"
                  >
                    <div className="px-5 pt-5">

                    <img src={product.image} className="w-100" />
                    </div>
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          {product.id == 1 && (
                            <h5>
                              <span className="badge bg-dark ms-2">NEW</span>
                            </h5>
                          )}
                          {product.id == 2 && (
                            <h5>
                              <span class="badge bg-primary ms-2">
                                bestseller
                              </span>
                            </h5>
                          )}
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundcolor: "rgba(251, 251, 0.15)" }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <a href className="text-reset">
                      <h5 className="card-title mb-2">{product.title}</h5>
                    </a>
                    <a href className="text-reset ">
                      <p>{product.category}</p>
                    </a>
                    <h6 className="mb-3 price">${product.price}</h6>
                    <Button
                    variant="primary"
                    onClick={()=>handleAddtoCart(product)}
                  >
                    Add to Cart
                  </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Filter />
    </div>
  );
};
export default Homepage;
