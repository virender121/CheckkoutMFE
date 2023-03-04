import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CheckoutPage from "./components/views/CheckoutPage/CheckoutPage";
import Navbar from "HomePageMFE/Navbar";
import "./index.css";

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
