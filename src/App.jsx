import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import './App.css'
import Dashboard from "./pages/dashboard/Dashboard";
import { useState } from "react";
import LanguageContext from "./context/LanguageContext";

export default function App() {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
    <div className="">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
    </LanguageContext.Provider>
  );
}
