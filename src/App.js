import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./features/home/ui/Home";
import Navbar from "./shared/components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
