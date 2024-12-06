import Image from "next/image";
import Logo from "../app/public/assets/image/HONEY.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="border-t-[1px] dark:border-t-gray-900">
      <div className="md:flex justify-between lg:px-20 px-6 py-20 text-white dark:text-slate-300  bg-[#1c1c9e] dark:bg-black columns ">
        <div className="mb-10 md:mb-0">
          <div className="mb-6 flex-columns">
            <h1 className="mb-4 text-3xl md:text-2xl font-bold">
              Get In Touch
            </h1>
            <Image
              src={Logo}
              width={120}
              height={120}
              className="px-4 bg-white dark:grayscale"
              alt="footer-logo"
            />
          </div>
          <div className="gap-4 text-[14px]">
            <div className="flex items-center gap-3">
              <IoLocation />
              <small>123 Street, New York, USA</small>
            </div>

            <div className="flex items-center gap-3">
              <IoMdCall />
              <small>+012 345 6789</small>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <small>info@htastudents.com</small>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-0">
          <h1 className="mb-4 text-2xl font-bold ">Quick Links</h1>
          <div className="text-[14px] flex-col md:flex gap-20 lg:gap-0">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <FaAngleRight />{" "}
                <Link
                  href=""
                  className=" hover:border-b-2 hover:ease-linear hover:duration-300"
                >
                  HOME
                </Link>
              </div>
              <div className="flex items-center gap-4 mb-4">
                {" "}
                <FaAngleRight />{" "}
                <Link
                  href=""
                  className=" hover:border-b-2 hover:ease-linear hover:duration-300"
                >
                  PROFILES
                </Link>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                {" "}
                <FaAngleRight />{" "}
                <Link
                  href=""
                  className=" hover:border-b-2 hover:ease-linear hover:duration-300"
                >
                  BATCHES
                </Link>
              </div>
              <div className="flex items-center gap-4 mb-4">
                {" "}
                <FaAngleRight />{" "}
                <Link
                  href=""
                  className=" hover:border-b-2 hover:ease-linear hover:duration-300"
                >
                  COURSES
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-0">
          <h1 className="mb-4 text-2xl font-bold ">Courses</h1>
          <div className=" text-[14px] flex-col md:flex gap-6 md:gap-0">
            
              <div className="flex items-center gap-4 mb-4 ">
                <FaAngleRight />{" "}
                <Link
                  href=""
                  className=" hover:border-b-2 hover:ease-linear hover:duration-300"
                >
                  SOFTWARE ENGINEERING
                </Link>
              </div>

            <div className="flex items-center gap-4 mb-4">
              {" "}
              <FaAngleRight />{" "}
              <Link
                href=""
                className=" hover:border-b-2 hover:ease-linear hover:duration-300"
              >
                DIGITAL MARKETING{" "}
              </Link>
            </div>
            <div className="flex items-center gap-4 mb-4">
              {" "}
             <FaAngleRight />{" "}
              <Link
                href=""
                className=" hover:border-b-2 hover:ease-linear hover:duration-300"
              >
                DATA ANALYSIS
              </Link>
            </div>
            <div className="flex items-center gap-4 mb-4">
              {" "}
              <FaAngleRight />{" "}
              <Link
                href=""
                className=" hover:border-b-2 hover:ease-linear hover:duration-300"
              >
                PHOTOGRAPHY
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-4 text-2xl font-bold">Follow Us</h1>

          <div>
            <div className="flex items-center gap-8 ">
              <FaTwitter />
              <FaFacebookF />
              <FaSquareInstagram />
              <FaLinkedinIn />
            </div>

            <p className="mt-8 text-lg text-[13px]">
              {" "}
              We have set out to provide the needed <br />
              internationally acceptable training in the <br />
              vocational sector in Nigeria.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-20  dark:bg-gray-900 bg-white">
        <p className="text-[#1c1c9e] dark:text-slate-300 text-[14px]">
          {" "}
          Copyright © Honey Treat Academy 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
