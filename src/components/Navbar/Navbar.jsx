import React, { useState, useEffect } from "react";
import Logo from "../../assets/website/logo.png";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import DarkMode from "./DarkMode";
import { toast } from "react-toastify";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Best Seller", link: "/#services" },
];

const DropdownLinks = [
  { name: "Trending Books", link: "/#" },
  { name: "Best Selling", link: "/#" },
  { name: "Authors", link: "/#" },
];

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleRegister = () => {
    const { name, email, password } = form;
    if (!name || !email || !password) return toast.error("Please fill all fields");
    if (!email.includes("@")) return toast.error("Enter a valid email");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");

    localStorage.setItem("user", JSON.stringify({ name, email }));
    setUser({ name, email });
    toast.success("Successfully registered");
    setForm({ name: "", email: "", password: "" });
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
  };

  return (
    <div className="shadow-md w-full fixed bg-white dark:bg-gray-900 dark:text-white duration-200" style={{zIndex: 99}}>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            Books
          </a>

          <div className="flex items-center gap-4">
            <DarkMode />
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className="py-4 px-4 hover:text-primary duration-200">
                    {menu.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex h-[72px] items-center gap-1">
                  Quick Links
                  <FaCaretDown className="transition group-hover:rotate-180" />
                </a>
                <div className="absolute -left-9 z-50 hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <a href={'#top_books'} className="block p-2 hover:bg-primary/20 rounded-md">
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {!user ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-2"
              >
                Register <IoLogIn className="text-xl" />
              </button>
            ) : (
              <div className="relative">
                <button onClick={() => setShowUserDropdown(!showUserDropdown)} className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-2">
                  <FaUser className="text-xl" /> {user.name}
                </button>
                {showUserDropdown && (
                  <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                        👤 {user.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
                        📧 {user.email}
                      </p>
                    </div>
                    <div className="p-3">
                      <button
                        onClick={handleLogout}
                        className="w-full text-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 py-2 px-3 rounded-md transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Register</h2>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mb-3 p-2 border rounded-md dark:bg-gray-800"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mb-3 p-2 border rounded-md dark:bg-gray-800"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full mb-4 p-2 border rounded-md dark:bg-gray-800"
            />
            <button
              onClick={handleRegister}
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark"
            >
              Sign Up
            </button>
            <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
              Already have an account? <a href="#" className="text-primary underline">Login</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;