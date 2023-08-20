import { add } from "../../store/cartSlice";
import "./Filter.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";



const Filter = () => {
  const [products1, setProducts1] = useState([]);
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  function LoadProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts1(data);
      });
  }

  function handleCategoryChange(e) {
    const selectedCategory = e.target.value;
    console.log(selectedCategory);
    let url = "https://fakestoreapi.com/products";
    if (selectedCategory !== "all") {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }
    console.log(url);
    LoadProducts(url);
  }


  useEffect(() => {
    LoadProducts("https://fakestoreapi.com/products");
  }, []);

  const handleAddtoCart = (event, product) => {
    event.stopPropagation();
    window.gtag('event', 'click', {
      event_category: "Button",
      event_label: "cart button clicked",
      event_addedProduct: product.title,
    })
    Dispatch(add(product));
  };

  const handlePriceHighToLow = () => {
    let sortedInput = products1.slice().sort((a, b) => b.price - a.price);
    setProducts1(sortedInput);
  };
  const handlePriceLowToHigh = () => {
    let sortedInput = products1.slice().sort((a, b) => a.price - b.price);
    setProducts1(sortedInput);
  };
  const handleHighRating = () => {
    let sortedInput = products1
      .slice()
      .sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts1(sortedInput);
  };
  const handleLowRating = () => {
    let sortedInput = products1
      .slice()
      .sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts1(sortedInput);
  };

  const navigateProductPage = (product) => {
    window.gtag('event', 'click', {
      event_category: "Button",
      event_label: "product Card Clicked",
      event_clickedProduct: product.title,
    })
    Navigate("/productPage", {
      state: {
        product: product,
      },
    })
  }
  return (
    <>
      <h2 className="ProductTitle">Products</h2>
      <div className="Filtercontainer">
        <div className="filter">
          <h2>Filter Products</h2>
          <label htmlFor="category">Category:</label>
          <select onChange={handleCategoryChange} id="category">
            <option value="all">all</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </div>

        <div className="products1">
          <section>
            <div className="SortButtons">
              <button onClick={() => handlePriceHighToLow()}>
                Price -- High - Low
              </button>
              <button onClick={() => handlePriceLowToHigh()}>
                Price -- Low - High
              </button>
              <button onClick={() => handleHighRating()}>
                Rating -- High - Low
              </button>
              <button onClick={() => handleLowRating()}>
                Rating -- Low - High
              </button>
            </div>
            <div className="text-center">
              <div className="row products-page">
                {products1.map((product) => (
                  <div className="col-lg-3 col-md-6 mb-4 " >

                    <div style={{ cursor: "pointer" }} className="card h-100 Productcard" onClick={() => navigateProductPage(product)}>
                      <div
                        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light h-100 "
                        data-mdb-ripple-color="light"
                      >
                        <div className="px-4 pt-5" >
                          <img src={product.image} className="w-100" alt="ProductImage" />

                        </div>

                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            {product.id === 1 && (
                              <h5>
                                <span className="badge bg-dark ms-2">
                                  NEW
                                </span>
                              </h5>
                            )}
                            {product.id === 2 && (
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
                            style={{
                              backgroundcolor: "rgba(251, 251, 0.15)",
                            }}
                          />
                        </div>

                      </div>
                      <div className="card-body">
                        <Link href className="text-reset">
                          <h5 className="card-title mb-2">
                            {product.title.slice(0, 20)}
                          </h5>
                        </Link>
                        <Link className="text-reset ">
                          <p>{product.category}</p>
                        </Link>
                        <Link className="text-reset ">
                          <p style={{ marginBottom: "0px" }}>Rating</p>
                          <div
                            class="stars"
                            style={{
                              "--rating": `${Math.round(product.rating.rate * 2) / 2 / 5
                                }`,
                            }}
                          >
                            <div class="bg">⭐⭐⭐⭐⭐</div>
                          </div>
                        </Link>
                        <h6
                          style={{ marginTop: "10px" }}
                          className="mb-3 price"
                        >
                          ${product.price}
                        </h6>
                        <Button
                          variant="primary"
                          onClick={(e) => handleAddtoCart(e, product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Filter;
