"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { usePathname } from 'next/navigation';


export default function Header() {
  const [small, setSmall] = useState(true);
  const [base, setBase] = useState(false);
  const [border, setBorder] = useState(false);
  const [width, setWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleScroll = () => {
        if (pathname === '/') {
          setSmall(window.pageYOffset <= 300);
          setBorder(window.pageYOffset > 700);
          if (window.pageYOffset > 300 && window.pageYOffset < 800) {
            setBase(true);
            setSmall(false);
            setOffset(window.pageYOffset / 70);
          } else if (window.pageYOffset <= 300) {
            setBase(false);
            setSmall(true);
          }
        } else if (pathname.startsWith('/portfolio')) {

          setSmall(window.pageYOffset <= 300);
          setBorder(window.pageYOffset > 200);
          if (window.pageYOffset > 400 && window.pageYOffset < 600) {
            setBase(true);
            setSmall(false);
            setOffset(window.pageYOffset / 70);
          } else if (window.pageYOffset <= 400) {
            setBase(false);
            setSmall(true);
          }
        }
        if (pathname.startsWith('/portfolio/')) {

          setSmall(window.pageYOffset <= 300);
          setBorder(window.pageYOffset > 200);
          if (window.pageYOffset > 400 && window.pageYOffset < 600) {
            setBase(true);
            setSmall(false);
            setOffset(window.pageYOffset / 70);
          } else if (window.pageYOffset <= 400) {
            setBase(false);
            setSmall(true);
          }
        }

      };

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [pathname]);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Our Services", link: "/#services" },
    { name: "About Us", link: "/#about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/#contact" },

  ];

  const showlinks = (e) => {
    const navMenu2 = document.querySelector("#navMenu2");
    const hamburger = document.querySelector("#hamburger");
    const close = document.querySelector("#close");

    if (hamburger.classList.contains("hidden")) {
      hamburger.classList.remove("hidden");
    } else {
      close.classList.remove("hidden");
    }

    e.currentTarget.classList.add("hidden");

    if (navMenu2.classList.contains("hidden")) {
      navMenu2.classList.remove("hidden");
      navMenu2.classList.add("flex");
    } else {
      navMenu2.classList.add("hidden");
      navMenu2.classList.remove("flex");
    }
  };

  return (
    <>
      <nav
        style={{
          marginLeft: base ? `${offset + "px"}` : "0px",
          marginTop: base ? `${offset + "px"}` : "0px",
          width: base ? `${width - offset * 4 + "px"}` : "",
          paddingLeft: base ? `${offset * 2 + "px"}` : "0px",
          paddingRight: base ? `${offset * 2 + "px"}` : "0px",
        }}
        className={`${small ? "relative w-full z-20" : ""} ${base ? "fixed z-20" : ""
          }`}
      >
        <div
          style={{
            borderRadius: base ? `${offset * 4 + "px"}` : "",
            paddingBottom: base ? `${offset * 1 + "px"}` : "",
            paddingTop: base ? `${offset * 1 + "px"}` : "",
          }}
          className={`bg-black text-white px-10 sm:px-20 py-2 sm:py-4 flex justify-between items-center ${border ? "border-4 border-[#005dac]" : ""
            }`}
        >
          <Link href="/" className="text-lg text-white">
            <h2 className="text-xl md:text-2xl font-bold">
              Brightstep Consulting WLL
            </h2>

          </Link>
          <div className="md:hidden my-auto">
            <button
              id="hamburger"
              onClick={showlinks}
              className="w-7 h-10 lg:hidden"
            >
              <div className="border border-blue-500 mb-3"></div>
              <div className="border border-blue-500"></div>
            </button>
            <button
              id="close"
              onClick={showlinks}
              className="hidden w-9 h-10 lg:hidden relative"
            >
              <div className="border border-blue-500 absolute w-full transition ease-in-out duration-500 rotate-45"></div>
              <div className="border border-blue-500 absolute w-full transition ease-in-out duration-500 -rotate-45"></div>
            </button>
          </div>
          <div id="navMenu" className="hidden md:block min-w-max">
            <ul className="md:flex items-center justify-between space-x-3 lg:space-x-3 xl:w-[30rem] max-w-[30rem] lg:font-semibold">
              <li className="hidden"></li>
              {Links.map((link) => (
                <li key={link.name} className="group h-5">
                  <Link className="cursor-pointer" href={link.link}>
                    {link.name}
                  </Link>
                  <div className="w-0 border-[#005dac] transition-[width] ease-in duration-500 group-hover:w-full group-hover:border-2"></div>
                </li>
              ))}

            </ul>
          </div>
        </div>

        <div
          id="navMenu2"
          className="hidden flex-col items-center bg-gray-900 rounded-[20px] m-2 py-8 min-w-max"
        >
          <ul className="md:hidden text-xl text-white font-semibold  text-center">
            <li className="hidden"></li>
            {Links.map((link) => (
              <li key={link.name} className="m-6">
                <Link
                  onClick={() => document.querySelector("#close").click()}
                  className="cursor-pointer"
                  href={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </nav>
    </>
  );
}
