import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className=" text-white tex-[18px] font-bold cursor-pointer flex">
            Shivam &nbsp;<span className="sm:block hidden">Kumar</span>
          </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white underline"
                  : " text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => setActive(link.title)}
            >
              <a
                target={link.id === "resume" ? "_blank" : undefined}
                href={
                  link.id === "resume"
                    ? `https://drive.google.com/file/d/1z2x4JrtSIzXI2VHvrsWVf5-oGwFYIMSC/view?usp=drive_link`
                    : `#${link.id}`
                }
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className=" sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex flex-col justify-end items-center gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : " text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a
                    target={link.id === "resume" ? "_blank" : undefined}
                    href={
                      link.id === "resume"
                        ? `https://drive.google.com/file/d/1z2x4JrtSIzXI2VHvrsWVf5-oGwFYIMSC/view?usp=drive_link`
                        : `#${link.id}`
                    }
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
