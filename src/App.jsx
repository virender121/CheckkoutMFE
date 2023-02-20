import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import Navbar from "./components/views/Navbar/Navbar";
import { ProductCard } from "./components/views/ProductCard/ProductCard";
import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    {/* <Header />
    <Navbar /> */}
    <ProductCard />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
