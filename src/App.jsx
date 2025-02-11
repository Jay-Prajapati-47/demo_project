// import { useState } from "react";
import Header from "./component/Header.jsx";
// import Footer from "./component/Footer";
// import Content from "./component/Content.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./component/About.jsx";
import Home from "./component/Home.jsx";
import ContactUs from "./component/ContactUs.jsx";
// import Arrays from "./component/Arrays.jsx";
// import City from "./component/City.jsx";
// import SalesData from "./component/SalesData.jsx";
// import ArrayDemo3 from "./component/ArrayDemo3.jsx";
// import { ArrayDemo4 } from "./component/ArrayDemo4.jsx";
// import UseStateDemo from "./component/UseStateDemo.jsx";
// import UseStateDemo1 from "./component/UseStateDemo1.jsx";
// import UseStateTask1 from "./component/UseStateTask1.jsx";
// import UseStateTask2 from "./component/UseStateTask2.jsx";
// import UseStateTask3 from "./component/UseStateTask3.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
