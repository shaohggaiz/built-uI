import React from "react";
import { logo } from "../assets";
import { menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className="flex justify-between items-center w-full py-6">
      <div className="">
        <img src={logo} className="w-[120px] h-[40px]" alt="" />
      </div>
      <div className="">
        <ul className={`list-none md:flex hidden`}>
          {navLinks.map((nav, index) => (
            <li
              className={`text-white ${
                index !== navLinks.length - 1 ? "mr-10" : "mr-0"
              }`}
              key={nav.id}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex md:hidden">
        <img
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? close : menu}
          alt=""
        />
        <div className={`${toggle ? 'flex justify-center items-center' : 'hidden'} sidebar absolute bg-black-gradient p-6 top-20 right-6 w-[140px] rounded-md`}>
          <ul className={`list-none sidebar`}>
            {navLinks.map((nav, index) => (
              <li
                className={`text-white ${
                  index !== navLinks.length - 1 ? "mb-5" : "mb-0"
                }`}
                key={nav.id}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
