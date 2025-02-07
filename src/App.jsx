import { useState } from "react";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer";
import Content from "./component/Content.jsx";
import "./App.css";
import About from "./component/About.jsx";
import Arrays from "./component/Arrays.jsx";
import City from "./component/City.jsx";
import SalesData from "./component/SalesData.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Arrays />
      {/* <City /> */}
      <SalesData />
      {/* <About /> */}
      <Footer></Footer>
    </>
  );
}

export default App;
