import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
