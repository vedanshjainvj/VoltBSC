import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/font/PolySans-Median.woff2";
import "./assets/font/PolySans-Slim.woff2";
import NavBar from "./components/NavBar";
import Home from "./page/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="w-full h-full min-h-screen flex flex-col bg-[#f3f6fd] text-[#16191E] font-polySans"
        style={{
          fontFamily: "PolySans",
        }}
      >
        <NavBar />
        <main className="flex-1 w-full">
          <AppRouter />
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};
