import React, { useState, useContext, createContext } from "react";
import colorsArray from "../colors";

const ColorsContext = createContext();

export const ColorsProvider = ({ children }) => {
  const [colors, setColors] = useState(colorsArray);

  return (
    <ColorsContext.Provider value={{ colors, setColors }}>{children}</ColorsContext.Provider>
  );
};

export const useColors = () => useContext(ColorsContext);
