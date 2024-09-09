import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarData from "../Data/Navbar";
import { ShopingCardUse } from "../Content/ShopingCard";

const Navbar = () => {
  const {ItemCardLength,SetOpenClose} = ShopingCardUse()
  

  const navbars = NavbarData.map((us) => (
    <Link
      className={
        window.location.pathname === us.link
          ? "link text-gray-400/70  translate-y-2   "
          : "link  "
      }
      onClick={() => (window.location.pathname = us.link)}
      to={us.link}
    >
      {us.title}{" "}
    </Link>
  ));


  return (
    <div onClick={()=>SetOpenClose(use=>!use)} className=" cursor-pointer shadow-lg px-8 py-4  flex justify-between items-center  ">
      <div className="flex  gap-4 items-center  ">{navbars}</div>
      <div className="group  shadow-lg transition-all duration-300  relative flex hover:text-white justify-center items-center border-2 hover:bg-emerald-300 border-cyan-300  rounded-full  w-16 h-16">
        <div  >
          <FaShoppingCart className="h-6 w-6 group-hover:text-white text-cyan-300 " />
        </div>
        {ItemCardLength > 0 && (
          <div className=" absolute bottom-0 right-0 translate-y-3  flex justify-center items-center border-2 border-gray-300 text-white bg-red-500 rounded-full h-8 w-8  ">
            {ItemCardLength} {ItemCardLength>9 && <span className="text-sm">+</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
