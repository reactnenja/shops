// import React from "react";
import { TbUserShare } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./BtnNav.scss";
const BtnNav = () => {
  return (
    <section className="btn__option">
      <button className="btn__option-items">
        <TbUserShare />
      </button>
      <button className="btn__option-items">
        <IoSearch />
      </button>
      <button className="btn__option-items">
        <FiHeart />
        <span className="badge bg-primary">12</span>
      </button>
      <button className="btn__option-items">
        <HiOutlineShoppingCart />
        <span className="badge bg-primary">12</span>
      </button>
    </section>
  );
};

export default BtnNav;
