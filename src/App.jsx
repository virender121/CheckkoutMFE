import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Navbar from "./components/views/Navbar/Navbar";
import Hero from './components/views/Hero/Hero'
import { ProductCard } from "./components/views/ProductCard/ProductCard";
import "./index.css";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

const App = () => (
  <div >
     <Header />
    <Navbar />
    <ProductCard />
    <LoginPage />
    <RegisterPage />
    <Hero/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
