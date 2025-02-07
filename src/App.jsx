import { useState } from "react";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer";
import Content from "./component/Content.jsx";
import "./App.css";
import About from "./component/About.jsx";

function App() {
  return (
    <>
      <Header></Header>
      {/* <Content></Content> */}
      <About />
      <Footer></Footer>
    </>
  );
}

export default App;
