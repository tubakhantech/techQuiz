import React from "react";
import Login from "./login/Login";
import Header from "./homepage/Header";
import Home from "./homepage/Home";
import Quizz from "./homepage/Quizz";
import Instraction from "./homepage/Instraction";
// import More from './homepage/More'
import Contact from "./homepage/Contact";
import About from "./homepage/About";
import Theme from "./homepage/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/instraction" element={<Instraction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/theme" element={<Theme />} />
        </Routes>
        {/* <More /> */}
      </BrowserRouter>
      {/* <Login></Login> */}
    </div>
  );
};
export default App;
