import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#about",
  },
  {
    title: "Contact Us",
    link: "/#contact",
  },
  {
    title: " Privacy Policy",
    link: "/#blog",
  },
  {
    title: "Terms & Conditions",
    link: "/#blog",
  },
];
const FooterLinks2 = [
  {
    title: "Shop",
    link: "/#",
  },
  {
    title: "Bestsellers",
    link: "/#Faq",
  },
  {
    title: "New Arrivals",
    link: "/#Terms",
  },
  {
    title: "Categories",
    link: "/#Privacy",
  },
  {
    title: "Offers",
    link: "/#Offers",
  },
];
const FooterLinks3 = [
  {
    title: "Tashkent, Uzbekistan",
    link: "/#",
  },
  {
    title: "Samarkand, Uzbekistan",
    link: "/#Support_Center",
  },
  {
    title: "Bukhara, Uzbekistan",
    link: "/#Online_Store",
  },
  {
    title: "Fergana, Uzbekistan",
    link: "/#Careers",
  },
  {
    title: "Andijan, Uzbekistan",
    link: "/#Careers",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Books Store
            </h1>
            <p className="">
              2025. Online store bookstory.uz:
              Delivery of goods is carried out to all regions. All rights reserved.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p> Tashkent, Uzbekistan</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+998 90 123 45 67</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks2.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks3.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2025 Made with by (白午)
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
