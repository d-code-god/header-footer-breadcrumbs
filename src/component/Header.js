"use client";
import Image from "next/image";
import Logo from "@/app/public/assets/image/HONEY.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between w-full  text-white bg-[#1c1c9e] dark:bg-gray-900 px-14 h-10">
        <div className="flex gap-10 jutify-start">
          <div className="flex items-center gap-2 hover:bg-white hover:text-[#1c1c9e] hover:duration-300 hover:ease-in-out hover:h-10 hover:px-4 dark:hover:bg-gray-400 dark:hover:text-gray-900">
            <IoLocation />
            <small>123 Street, New York, USA</small>
          </div>

          <div className="flex items-center gap-2 hover:bg-white hover:text-[#1c1c9e] hover:duration-300 hover:ease-in-out hover:h-10 hover:px-4 dark:hover:bg-gray-400 dark:hover:text-gray-900">
            <FaClock />
            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
          </div>
        </div>

        <div className="flex justify-end ">
          <div className="flex items-center gap-2 hover:bg-white dark:hover:bg-gray-400 hover:text-[#1c1c9e] hover:duration-300 hover:ease-in-out hover:h-10 hover:px-4 pr-6 hover:mr-1 dark:hover:text-gray-900">
            <IoMdCall />
            <small>+012 345 6789</small>
          </div>

          <div className="flex items-center gap-6 bg-white dark:bg-gray-400 text-[#1c1c9e] dark:text-gray-900  hover:h-10 ">
            <div className="flex items-center justify-center w-6 h-8 pl-6 pr-6 border-r-2 border-[#1c1c9e] dark:border-gray-900">
              <Link href="">
                <FaFacebookF className="duration-300 hover:text-xl hover:ease-in-out" />
              </Link>
            </div>

            <div className="flex items-center justify-center w-6 h-8 pr-6 border-r-2 border-[#1c1c9e] dark:border-gray-900">
              <Link href="">
                <FaTwitter className="duration-300 hover:text-xl hover:ease-in-out" />
              </Link>
            </div>

            <div className="flex items-center justify-center w-6 h-8 pr-6 border-r-2 border-[#1c1c9e] dark:border-gray-900">
              <Link href="">
                <FaLinkedinIn className="duration-300 hover:text-xl hover:ease-in-out" />
              </Link>
            </div>

            <div className="flex items-center justify-center w-6 h-8 pr-6">
              <Link href="" className="border-r-blue-200">
                <FaSquareInstagram className="duration-300 hover:text-xl hover:ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Start */}
      <nav className="flex justify-between w-full h-24 bg-white dark:bg-gray-400 text-[#1c1c9e] dark:text-gray-900 px-14 py-10 items-center sticky top-0 left-0 transition duration-300 ease-in-out z-50">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="logo"
            width={150}
            height={150}
            // style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="relative">
          <ul className="flex justify-center gap-6">
            <div className="flex items-center px-2 hover:border-b-2 hover:border-[#1c1c9e]  dark:hover:border-gray-900 hover:duration-300 hover:h-12">
              <li>
                <Link href="/" className="font-semibold">
                  HOME
                </Link>
              </li>
            </div>

            <div className="flex items-center px-2 hover:border-b-2 hover:border-[#1c1c9e] dark:hover:border-gray-900  hover:duration-300 hover:h-12">
              <li>
                <Link href="/about" className="font-semibold">
                  ABOUT
                </Link>
              </li>
            </div>

            <div className="flex items-center px-2 hover:border-b-2 hover:border-[#1c1c9e]  dark:hover:border-gray-900 hover:duration-300 hover:h-12">
              <li>
                <Link href="/courses" className="font-semibold">
                  COURSES
                </Link>
              </li>
            </div>

            <div className="flex items-center px-2 hover:border-b-2 hover:border-[#1c1c9e] dark:hover:border-gray-900 hover:duration-300 hover:h-12">
              <li>
                <Link href="/batches" className="font-semibold">
                  BATCHES
                </Link>
              </li>
            </div>

            <div className="flex items-center px-2 hover:border-b-2 hover:border-[#1c1c9e] dark:hover:border-gray-900 hover:duration-300 hover:h-12">
              <li>
                <Link href="/profile" className="font-semibold">
                  PROFILE
                </Link>
              </li>
            </div>

            <div className="flex items-center px-2 hover:border-b-2 hover:border-[#1c1c9e]  dark:hover:border-gray-900 hover:duration-300 hover:h-12">
              <li>
                <Link href="/contact" className="font-semibold">
                  CONTACT
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <ThemeSwitcher className="absolute right-0" />
      </nav>
    </>
  );
};

export default Header;
