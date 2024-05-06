import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
import './App.css'
import Dashboard from "./pages/dashboard/Dashboard";
import { useState } from "react";
import LanguageContext from "./context/LanguageContext";
import DarkLightContext from "./context/DarkLightContext";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <DarkLightContext.Provider value={{ darkMode, setDarkMode }}>
        <div className="">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </DarkLightContext.Provider>
    </LanguageContext.Provider>
  );
}
