// App.js
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";

import Signup from "./login/Signup";
import Header from "./homepage/Header";
import Footer from "./homepage/Footer";
import Beginner from "./homepage/Beginner";
import Intermediate from "./homepage/Intermediate";
import Expert from "./homepage/Expert";
import Contact from "./homepage/Contact";
import About from "./homepage/About";
import Qution from "./public/Qution";
import Quetion2 from "./public/Quetion2";
import Quetion3 from "./public/Quetion3";
import Profileinfo from "./homepage/Profileinfo";
import ProtectedRoute from "./login/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const location = useLocation();
  const pathname = location.pathname;

  const hideHeaderFooter =
    pathname.startsWith("/quiz/") ||
    pathname.startsWith("/quiz2/") ||
    pathname.startsWith("/quiz3/");

  return (
    <>
      {/* Header ko hamesha render kar rahe, par quiz page par dikhate nahi */}
      <div style={{ display: hideHeaderFooter ? "none" : "block" }}>
        <Header />
      </div>

      <Outlet />

      <div style={{ display: hideHeaderFooter ? "none" : "block" }}>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beginner />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quizz" element={<Intermediate />} />
          <Route path="/instraction" element={<Expert />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* ✅ Protected profile route */}
          <Route
            path="/info"
            element={
              <ProtectedRoute>
                <Profileinfo />
              </ProtectedRoute>
            }
          />

          {/* ✅ Quiz routes */}
          <Route path="/quiz/:topic" element={<Qution />} />
          <Route path="/quiz2/:topic" element={<Quetion2 />} />
          <Route path="/quiz3/:topic" element={<Quetion3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
