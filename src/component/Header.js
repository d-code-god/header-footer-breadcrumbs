"use client";
import Image from "next/image";
import Logo from "../app/public/assets/image/honey.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoHomeOutline, IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaBook,
  FaCalendar,
  FaAddressCard,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  console.log(Image);

  const [isOpen, setIsOpen] = React.useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "top-[80px]",
        "py-10",
        "px-4",
        "right-0",
        "w-[70%]",
        "h-screen",
        "bg-[#1c1c9e]",
        "dark:bg-black",
        "dark:text-white",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "text-white",
        "z-50",
        "duration-500",
        "transition",
        "delay-300",
        "ease-in-out",
        "transform",
        "translate-x-0",
        "absolute",
        "fixed",
        "text-[22px]",
      ];
    } else {
      menuClasses = [
        "hidden",
        "md:flex",
        "md:gap-8",
        "md:text-[15px]",
        "md:text-[#1c1c9e]",
        "md:uppercase",
        "md:relative",
        "md:dark:text-slate-300",
        "md:items-center",
        "md:justify-center",
      ];
    }

    return menuClasses.join(" ");
  }

  return (
    <>
      <div className="justify-between w-full   bg-white dark:bg-black px-10 h-10 items-center border-b-[1px] hidden md:flex">
        <div className="flex gap-10 jutify-start border-r-[1px] pr-6 h-10">
          <div className="flex items-center gap-2 text-[#1c1c9e] dark:text-slate-300">
            <IoLocation />
            <small>123 Street, New York, USA</small>
          </div>

          <div className="flex items-center gap-2 text-[#1c1c9e] dark:text-slate-300">
            <FaEnvelope />
            <small>info@honeytreatacademy.com</small>
          </div>
        </div>

        <div className="flex justify-end gap-4 border-x-[1px] px-6 h-10 items-center text-[#1c1c9e] dark:text-slate-300 text-[15px]">
          <Link href="">
            <FaFacebookF />
          </Link>

          <Link href="">
            <FaTwitter />
          </Link>

          <Link href="">
            <FaLinkedinIn />
          </Link>

          <Link href="">
            <FaSquareInstagram />
          </Link>
        </div>
      </div>

      {/* Navbar Start */}
      <div className="navbar flex justify-between w-full bg-white dark:bg-black dark:text-slate-300 text-[#1c1c9e] items-center sticky top-0 left-0 z-50 md:px-10 px-10 h-20 drop-shadow">
        <Image
          src={Logo}
          alt="logo"
          width={120}
          height={120}
          className="justify-start items-start  md:w-30 w-24"
        />

        <div className={getMenuClasses()}>
          <ul className="md:flex  justify-center items-center md:text-[14px] gap-10 md:gap-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`hvr-underline-from-left group px-0 mx-4 relative md:mb-0 mb-10 `}
              >
                <Link
                  href={item.link}
                  className={` flex items-center uppercase z-20 gap-4 md:gap-2 ${
                    pathname == item.link ? "active" : ""
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>

                {/* <span className="absolute h-full bg-[#1c1c9e] dark:bg-black w-full hidden left-0 top-0 group-hover:flex active:flex rounded-t-2xl -z-10"></span> */}
              </li>
            ))}
          </ul>
        </div>
        <ThemeSwitcher />

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-[#1c1c9e] dark:text-slate-300"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

const menuItems = [
  { label: "Home", link: "/", icon: <FaHome /> },
  { label: "About", link: "/about", icon: <FaUser /> },
  { label: "Courses", link: "/courses", icon: <FaBook /> },
  { label: "Batches", link: "/batches", icon: <FaCalendar /> },
  { label: "Profile", link: "/profile", icon: <FaAddressCard /> },
  { label: "Contact", link: "/contact", icon: <FaPhone /> },
];
