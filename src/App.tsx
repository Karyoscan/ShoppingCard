import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./companent/Navbar";
import { ShoppingUseContentProvider } from "./Content/ShopingCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {
  return (
    <div>
      <ShoppingUseContentProvider>
        <Navbar />
        <div className="mx-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
      </ShoppingUseContentProvider>
    </div>
  );
}

export default App;
