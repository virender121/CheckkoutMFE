import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Navbar from "./components/views/Navbar/Navbar";
import Hero from './components/views/Hero/Hero'
import ProductCard from "HomePageMFE/ProductCard";
import "./index.css";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import CheckoutPage from "./components/views/CheckoutPage/CheckoutPage";
import Footer from "./components/views/Footer/Footer";
import OrderCard from "./components/views/OrderCard/OrderCard";

const App = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  useEffect(() => {
    window.matchMedia("(min-width:768)").addEventListener('change', e => setMatches(e.matches))
  }, [])
  return (
    <div >
      <Navbar />
      <CheckoutPage />


    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
