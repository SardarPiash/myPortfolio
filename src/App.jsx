import { useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./components/pages/Pages";

export default function App() {
  return (
    <div className="bg-[#1A1A1A] font-notoSans w-full min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
