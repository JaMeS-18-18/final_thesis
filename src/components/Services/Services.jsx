import React from "react";
import image1 from "../../assets/books/image1.png";
import image2 from "../../assets/books/image2.png";
import image3 from "../../assets/books/image3.png";
import { FaStar } from "react-icons/fa";

const Books = [
  {
    id: 1,
    img: image1,
    title: "Надежда Арленко",
    price: 2.99,
    description: "Надежда Арленко: Маркетинговые исследования: зачем нужны, как проводить и что для этого нужно",
  },
  {
    id: 2,
    img: image2,
    title: "Simply Artificial Intelligence",
    price: 4.99,
    description: "Combining bold graphics with easy-to-understand text, Simply Artificial Intelligence is the perfect introduction to the world of AI for those who are short of time but hungry for knowledge.",
  },
  {
    id: 3,
    img: image3,
    title: "Abdulla Qodiriy: O‘tkan Kunlar (latin)",
    price: 7.99,
    description: "“Oʻtkan kunlar” (Days Gone By) is a classic Uzbek novel written by Abdulla Qodiriy. It is widely considered the first Uzbek novel and was published in 1926. The story is set in 19th-century Tashkent",
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {Books.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => handleOrderPopup(service)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
