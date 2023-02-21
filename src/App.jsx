import React from "react";
import ReactDOM from "react-dom";
//import Header from "./components/views/Header/Header";
import LoginPage from "./components/views/LoginPage/LoginPage";
//import Navbar from "./components/views/Navbar/Navbar";
import { ProductCard } from "./components/views/ProductCard/ProductCard";
import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    {/* <Header />
    <Navbar /> */}
    {/* <ProductCard /> */}
    <LoginPage />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
