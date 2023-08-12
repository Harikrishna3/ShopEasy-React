import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate } from "react-router-dom";
import "./TopProducts.css"
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";


const TopProducts = () => {
  const Navigate = useNavigate();
  const [products1, setProducts1] = useState([]);
  const Dispatch = useDispatch();

  const fetchInfo = async () => {
    // return axios
    // .get("https://fakestoreapi.com/products")
    // .then((res) => setProducts1(res.data))

    return axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts1(res.data))
  };



  useEffect(() => {
    fetchInfo();
  }, []);

  const handleAddtoCart = (e, product) => {
    e.stopPropagation();

    window.gtag('event', 'click', {
      event_category: "Button",
      event_label: "cart button clicked",
      event_addedProduct: product.title,
    })


    Dispatch(add(product));
  }

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
    // Navigate(`/productPage?id=${product}`)
    // console.log(product);
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1250 },
      items: 5,
      slidesToSlide: 3,
    },
    Largedesktop: {
      breakpoint: { max: 1250, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="TopProducts">
      <h1
        style={{ textAlign: "left", marginTop: "35px", marginBottom: "25px" }}
      >
        Top Products
      </h1>

      <Carousel responsive={responsive}>

        {
          products1.map((product) => (

            <CardGroup>

              <Card className="ProductCard" style={{ cursor: "pointer", width: "18rem", margin: "5px" }} onClick={() => navigateProductPage(product)}>
                <Card.Img className="CardImage"
                  variant="top"
                  src={product.image}
                  style={{ height: "190px", width: "150px" }}
                />
                <Card.Body>
                  <Card.Title className="CardTitle">{product.title.slice(0, 20)}</Card.Title>
                  <Card.Text>{product.category}</Card.Text>
                  <Card.Text className="price">{product.price}$ </Card.Text>
                  <Button
                    variant="primary"
                    onClick={(e) => handleAddtoCart(e, product)}

                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>

            </CardGroup>

          ))
        }

      </Carousel>
      <div style={{ height: "40px" }}></div>
    </div>
  );
};

export default TopProducts;
