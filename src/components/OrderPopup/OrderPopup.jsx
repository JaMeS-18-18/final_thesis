import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

const OrderPopup = ({ orderPopup, setOrderPopup, book }) => {
  const [Form, setForm] = useState({
    name: "",
    email: "",
  });

  // Quantity holatiga qo'shimcha
  const [quantity, setQuantity] = useState(1);

  // Narxni raqamga aylantirib, totalni hisoblaymiz
  const price = parseFloat(book?.price || "0");
  const totalPrice = (price * quantity).toFixed(2);

  function Ordered() {
    if (Form.name === "" || Form.email === "") {
      toast.error("Please fill all the fields");
      return;
    }
    if (!Form.email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    ClearForm();
    toast.success("Your order has been placed successfully");
    setOrderPopup(false);
  }

  function ClearForm() {
    setForm({ name: "", email: "" });
    setQuantity(1); // 🆕 Sonni ham tiklash
  }

  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm" style={{zIndex: 999}}>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-3xl relative flex flex-col md:flex-row">
            <button
              className="absolute top-3 right-3 text-2xl"
              onClick={() => {
                setOrderPopup(false);
                ClearForm();
              }}
            >
              <IoCloseOutline />
            </button>

            {/* Book Info */}
            <div className="md:w-1/2 w-full mb-6 md:mb-0 md:mr-6 flex flex-col items-center text-center">
              <img
                src={book?.img || "/default-book.jpg"}
                alt={book?.title || "Book"}
                className="w-40 h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{book?.title || "Book Title"}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                {book?.description || "Short book description goes here."}
              </p>
              <div className="flex justify-center mt-2 text-yellow-400">
                {[...Array(1)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {book?.rating && (
                  <span className="text-sm text-gray-500 dark:text-gray-300 ml-1">
                    {book.rating}
                  </span>
                )}
              </div>
              <div className="text-lg font-bold text-blue-600 mt-2">
                ${book?.price.toFixed(2) || "19.99"}
              </div>
            </div>

            {/* Order Form */}
            <div className="md:w-1/2 w-full">
              <h3 className="text-lg font-semibold mb-4">Order Your Book</h3>

              <input
                onChange={(e) => setForm({ ...Form, name: e.target.value })}
                value={Form.name}
                type="text"
                placeholder="Name"
                className="w-full rounded-md border px-3 py-2 mb-4 dark:bg-gray-800"
              />
              <input
                onChange={(e) => setForm({ ...Form, email: e.target.value })}
                value={Form.email}
                type="email"
                placeholder="Email"
                className="w-full rounded-md border px-3 py-2 mb-4 dark:bg-gray-800"
              />

              {/* 🆕 Quantity Controller */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    className="bg-gray-200 hover:bg-gray-300 text-lg w-8 h-8 rounded-md"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-lg w-8 h-8 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right mb-4">
                <span className="text-sm text-gray-500">Total: </span>
                <span className="text-lg font-bold text-blue-600">${totalPrice}</span>
              </div>

              <button
                onClick={Ordered}
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
