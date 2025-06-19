import React from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";
import garri from "../../assets/books/garri.png";


const ImageList = [
   {
     id: 1,
     img: garri,
     title: "Garri Potter",
     price: 65,
     author: "J.K, Rouling",
     description: "“A book that has conquered the world, a literary standard for readers of all ages, and a synonym for success. J.K. Rowling is the most widely read author of our time. A book that has become a cult classic for several generations. The complete set of the series in a gift box.”",
   },
  {
    id: 2,
    img: Book2,
    title: "Who's there",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 14.70,
      rating: 3.5,
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 10.00  ,
      rating: 5.2 ,
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [Item, setItem] = React.useState(ImageList[0]);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {Item.title}
                <p class="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  by {Item.author || "Anonymous"}
                </p>{" "}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {Item.description}
              </p>
              <div>
                <button
                 onClick={() => handleOrderPopup(Item)}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={Item.img}
                  alt="biryani img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 rounded-full">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setItem(item);
                      }}
                    alt="biryani img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
