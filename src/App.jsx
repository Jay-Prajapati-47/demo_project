import Header from "./component/Header.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./component/About.jsx";
import Home from "./component/Home.jsx";
import ContactUs from "./component/ContactUs.jsx";
// import Movies from "./component/Movies.jsx";
// import PlayMovie from "./component/PlayMovie.jsx";
// import FormDemo5 from "./component/FormDemo5.jsx";
// import { FormDemo1 } from "./component/FormDemo1.jsx";
// import { FormDemo2 } from "./component/FormDemo2.jsx";
// import { FormDemo3 } from "./component/FormDemo3.jsx";
// import { FormDemo4 } from "./component/FormDemo4.jsx";
// import FormDemo6 from "./component/FormDemo6.jsx";
// import FormDemo7 from "./component/FormDemo7.jsx";
import Log from "./component/Log.jsx";
import ApiDemo1 from "./Api/ApiDemo1.jsx";
import Movies from "./Movies/Movies.jsx";
import MovieDetails from "./Movies/MovieDetails.jsx";
import Navbar from "./IMDb/Navbar.jsx";
import PostDemo1 from "./POST/PostDemo1.jsx";
import PostDemo2 from "./POST/PostDemo2.jsx";
// import ApiDemo1 from "./Api/ApiDemo1.jsx";
// import { FormTask1 } from "./component/FormTask1.jsx";

function App() {
  return (
    <>
      <Header></Header>
      {/* <Navbar></Navbar> */}
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/contact-us" element={<ContactUs />}></Route> */}
        {/* <Route path="/play" element={<Movies />}></Route>
        <Route path="/play/:id" element={<PlayMovie />}></Route>
        <Route path="/form1" element={<FormDemo1 />}></Route>
        <Route path="/form2" element={<FormDemo2 />}></Route>
        <Route path="/form3" element={<FormDemo3 />}></Route>
        <Route path="/form4" element={<FormDemo4 />}></Route>
        <Route path="/form6" element={<FormDemo6 />}></Route>
        <Route path="/form7" element={<FormDemo7 />}></Route>
        <Route path="/form/task1" element={<FormTask1 />}></Route>
        <Route path="/formdemo5" element={<FormDemo5 />}></Route> */}
        <Route path="/login" element={<Log />}></Route>
        <Route path="/post" element={<PostDemo1 />}></Route>
        <Route path="/post1" element={<PostDemo2 />}></Route>
        <Route path="/api" element={<ApiDemo1 />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
