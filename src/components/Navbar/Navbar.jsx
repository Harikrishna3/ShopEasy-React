import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Items = useSelector((state) => state.cart);

  return (
    <>
      <nav >
        <Link to="/" className="title">
          ShopEasy
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <div class="search-container">
              <input type="text" placeholder="Search.." name="search" />
              {/* <Search/> */}
              <button><i class="fa fa-search"></i></button>

            </div>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/sign">Sign</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <NavLink to="/cart" className=" ">
            <li className="cart d-flex align-items-center d-flex input-group w-auto">
              <NavLink to="/cart"><FontAwesomeIcon icon={faBagShopping} size="xl" style={{ color: "#ffffff" }} />   <span>({Items.length})</span> </NavLink>
            </li>
          </NavLink>
        </ul>
        {/* <ul>
          <li>cart</li>
        </ul> */}
      </nav>

      <hr style={{ marginTop: "10px", position: "sticky", top: "55px" }} />
    </>
  );
};
export default Navbar;
