import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Test from "./components/pages/test";
import Navbar from "./components/include/navbar";
import Home from "./components/pages/home";
import Support from "./components/pages/support";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
