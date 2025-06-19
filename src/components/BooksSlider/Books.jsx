import React from "react";
import t_book1 from "../../assets/books/t_book1.png";
import t_book2 from "../../assets/books/t_book2.png";
import t_book3 from "../../assets/books/t_book3.png";
import t_book4 from "../../assets/books/t_book4.png";
import t_book5 from "../../assets/books/t_book5.png";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: t_book1,
    title: "Граф Монте Кристо.",
    rating: 4.8,
    price: 7.8,
    author: "Александр Дюма",
  },
  {
    id: 2,
    img: t_book2,
    title: "Garri Potter",
    rating: 5.0,
    price: 65,
    author: "J.K, Rouling",
  },
  {
    id: 3,
    img: t_book3,
    title: "Atomic Habits",
    rating: 4.8,
    price: 7.30,
    author: "James Clear",
  },
  {
    id: 4,
    img: t_book4,
    title: "The little prince",
    rating: 4.7,
    price: 8.20,
    author: "Antuan Sent-Ekzyuper",
  },
  {
    id: 5,
    img: t_book5,
    title: "1984",
    rating: 5.0,
    price: 8.90,
    author: "Oruell Dzhordzh",
  },
];

const Books = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="mt-14 mb-12" id="top_books">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map((book) => (
                <div
                  key={book.id}
                  className="relative group space-y-3 rounded-md overflow-hidden transition duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 p-4"
                >
                  {/* Book Image */}
                  <img
                    src={book.img}
                    alt={book.title}
                    className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
                  />

                  {/* Book Info */}
                  <div>
                    <h3 className="font-semibold text-center">{book.title}</h3>
                    <p className="text-sm text-gray-700 text-center">{book.author}</p>
                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{book.rating}</span>
                    </div>
                  </div>

                  {/* Order Button on Hover */}
                  <div className="absolute bottom-[-50px] left-0 w-full flex justify-center group-hover:bottom-3 transition-all duration-300">
                    <button
                      className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4"
                      onClick={() => handleOrderPopup(book)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              ))}

            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
