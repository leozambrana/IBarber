import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AccentColorContext = createContext();

export const AccentColorProvider = ({ children }) => {
  const [accentColor, setAccentColor] = useState(null);

  useEffect(() => {
    getAccentColorFromStorage();
  }, []);

  const getAccentColorFromStorage = async () => {
    try {
      const storedAccentColor = await AsyncStorage.getItem("accentColor");
      setAccentColor(storedAccentColor);
    } catch (error) {
      console.error("Error retrieving accent color from storage:", error);
    }
  };

  const updateAccentColor = async (newColor) => {
    try {
      setAccentColor(newColor);
      await AsyncStorage.setItem("accentColor", newColor);
    } catch (error) {
      console.error("Error updating accent color:", error);
    }
  };

  return (
    <AccentColorContext.Provider
      value={{
        accentColor,
        updateAccentColor,
      }}
    >
      {children}
    </AccentColorContext.Provider>
  );
};
