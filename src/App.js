import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Homepage from "./components/Homepage/Homepage";
import { Provider } from "react-redux";
import store from "./store/store";
import CartMDB from "./components/Cart/CartMDB";
import Filter from "./components/Filter/Filter";
import ProductPage from "./components/ProductPage/ProductPage";
import Sign from "./components/pages/Sign";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
    window.gtag("event", "page_view", {
      page_title: "home",
      page_path: "/",
      page_location: window.location.href,
    });}
  }, [location]);

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />

        {/* <Homepage/> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/cartMDB" element={<CartMDB />} />
          <Route path="/productPage" element={<ProductPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
