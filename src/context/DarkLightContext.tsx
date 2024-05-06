import React from "react";

const DarkLightContext = React.createContext({
  darkMode: "light",
  setMode: (darkMode: string) => {},
});

export default DarkLightContext;
