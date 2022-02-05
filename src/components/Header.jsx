/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";

const navLinks = [
  {
    id: void 0,
    label: "Home",
  },
  {
    id: void 0,
    label: "About",
  },
  {
    id: void 0,
    label: "Menu",
  },
  {
    id: void 0,
    label: "Awards",
  },
  {
    id: void 0,
    label: "Contact",
  },
];

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-4 px-8">
        <div className="h-6 overflow-hidden">
          <img src={logo} className="h-full w-full object-contain" alt="" />
        </div>

        <ul className="hidden flex-1 list-none items-center justify-center gap-4 lg:flex">
          {navLinks?.map(({ id, label }, index) => (
            <li
              key={index}
              className="cursor-pointer duration-300 hover:opacity-60"
            >
              <a href={id} className="text-white no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center lg:flex-none">
          <div className="border-r border-solid border-white px-4">
            <a
              href={void 0}
              className="border-solid border-golden p-1 text-white no-underline duration-300 hover:border-b"
            >
              Log In / Registration
            </a>
          </div>

          <div className="px-4">
            <a
              href={void 0}
              className="border-solid border-golden p-1 text-white no-underline duration-300 hover:border-b"
            >
              Book Table
            </a>
          </div>
        </div>

        <div
          className="h-4 cursor-pointer overflow-hidden sm:block lg:hidden"
          onClick={() => setIsOverlayVisible(true)}
        >
          <img
            className="h-full w-full object-contain"
            src={hamburger}
            alt=""
          />
        </div>
      </nav>

      <div
        className={`fixed  inset-0 z-50 grid place-items-center bg-darkGray ${
          isOverlayVisible ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="grid list-none gap-8 text-center font-cormorant text-4xl text-golden">
          {navLinks?.map(({ id, label }, index) => (
            <li key={index} className="duration-300 hover:text-white">
              <a href={id} className="no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="absolute top-4 right-8 h-8 cursor-pointer overflow-hidden"
          onClick={() => setIsOverlayVisible(false)}
        >
          <img src={close} alt="" className="h-full w-full object-contain" />
        </div>
      </div>
    </>
  );
};

export default Header;