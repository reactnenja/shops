// import React from "react";
import { TbUserShare } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [hearth, setHearth] = useState(0);
  const [badge, setBadge] = useState(false);
  const [show, setShow] = useState(true);
  const handleBars = () => {
    const newShow = !show;
    setShow(newShow);
  };

  useEffect(() => {
    if (!show) {
      document.body.querySelector(".menu__navbar").classList.add("show");
    } else {
      document.body.querySelector(".menu__navbar").classList.remove("show");
    }
  }, [show]);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navigations">
            <Link to="/" className="logo">
              <img src={Logo} alt="logo site" />
            </Link>
            <ul className="menu__list">
              <li className="menu__items">
                <Link to="/" className="menu__link">
                  Home
                </Link>
              </li>
              <li className="menu__items">
                <Link to="/shop" className="menu__link">
                  Shop
                </Link>
              </li>
              <li className="menu__items">
                <Link to="/about" className="menu__link">
                  About
                </Link>
              </li>
              <li className="menu__items">
                <Link to="/contact" className="menu__link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="btn__group">
              <button className="btn__group-items">
                <TbUserShare />
              </button>
              <button className="btn__group-items">
                <IoSearch />
              </button>
              <button className="btn__group-items">
                <FiHeart />
                <span className="badge bg-primary">12</span>
              </button>
              <button className="btn__group-items">
                <HiOutlineShoppingCart />
                <span className="badge bg-primary">12</span>
              </button>
              <button onClick={handleBars} className="btn__group-items__bars">
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="menu__navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__items">
            <Link to="/shop" className="navbar__link">
              Shop
            </Link>
          </li>
          <li className="navbar__items">
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__items">
            <Link to="/contact" className="navbar__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
