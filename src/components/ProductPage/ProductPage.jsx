import { useLocation, useNavigate } from "react-router-dom";
import "./ProductPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";

const ProductPage = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const Dispatch = useDispatch();
  const [products, setProducts] = useState();

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_title: "Cart Page",
      page_path: "/cart",
      page_location: window.location.href
    })
  }, [location]);

  const fetchInfo = async () => {
    return axios
      .get(
        `https://fakestoreapi.com/products/category/${location.state.product.category}`
      )
      .then((res) => setProducts(res.data));
  };

  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    fetchInfo();
  }, [location]);

  useEffect(() => {
    onTop();
  });

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
    });
  };

  const handleAddtoCart = (product) => {
    window.gtag('event', 'click', {
      event_category: "Button",
      event_label: "cart button clicked",
      event_addedProduct: product.title,
    })
    Dispatch(add(product));
  };

  return (
    <div>
      <main>
        <div className="product-container">
          <div className="product-image">
            <img
              style={{}}
              src={location.state.product.image}
              alt="Product Image"
            />
          </div>
          <div className="product-details">
            <h2>{location.state.product.title}</h2>
            <p className="product-price">${location.state.product.price}</p>
            <hr />
            <p className="product-description">
              {location.state.product.description}
            </p>
            <button
              className="add-to-cart"
              onClick={() => handleAddtoCart(location.state.product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <hr />
        <section className="related-products">
          <h2>Related Products</h2>

          <div className="product-list">
            {products &&
              products.map(
                (product) =>
                  product.title !== location.state.product.title && (
                    <div
                      className="related-product"
                      onClick={() => navigateProductPage(product)}
                    >
                      <img src={product.image} alt="Related Product 1" />
                      <h3>{product.title}</h3>
                      <p className="related-product-category">
                        {product.category}
                      </p>
                      <p className="related-product-price">${product.price}</p>
                    </div>
                  )
              )}
          </div>
        </section>
      </main>
    </div>
  );
};
export default ProductPage;
