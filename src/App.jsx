import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import Books from "./components/BooksSlider/Books.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [book, setBook] = React.useState({});
  const handleOrderPopup = (book) => {
    setBook(book);
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <ToastContainer
				position="bottom-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				theme="colored"
			/>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Services handleOrderPopup={handleOrderPopup} />
      <Banner />
      {/* <CoverBanner /> */}
      <AppStore />
      {/* <PdfReader /> */}
      <Books handleOrderPopup={handleOrderPopup}/>
      <Testimonial />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} book={book} />
    </div>
  );
};

export default App;
