import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_API } from "../../sdk";
import myTheme from "./theme";

// 1. Pegar o tema do local storage
// 2. Se não existir, pegar o tema do banco de dados
// 3. Atualizar o tema no local storage

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [localTheme, setLocalTheme] = useState(myTheme);
  const [theme, setTheme] = useState({});
  const [accentColor, setAccentColor] = useState("#1F2F3C");
  const barberShopId = 2;

  useEffect(() => {
    getThemeFromStorage();
    getThemeFromDatabase();
    setTheme(localTheme);
    AsyncStorage.clear();
  }, []);

  const getThemeFromStorage = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem("@Barber:theme");

      if (storedTheme) {
        const parsedTheme = JSON.parse(storedTheme);
        setLocalTheme(parsedTheme);
        setTheme(parsedTheme);
        updateColor(parsedTheme.highlightColor);

        return;
      }
    } catch (error) {
      console.error("Error retrieving theme from storage:", error);
    }
  };

  const getThemeFromDatabase = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem("@Barber:theme");

      if (storedTheme) {
        setTheme(storedTheme);
        return;
      }

      const response = await fetch(
        `${REACT_APP_API}/themes?barberShopId=${barberShopId}`
      );

      const data = await response.json();

      if (response.ok) {
        setTheme(data[0]);
        updateColor(data[0].highlightColor);

        await AsyncStorage.setItem("@Barber:theme", JSON.stringify(data[0]));
      } else {
        console.error(
          "Error retrieving theme from database:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error retrieving theme from database:", error);
    }
  };

  const updateColor = async (newColor) => {
    try {
      if (newColor !== accentColor) {
        setAccentColor(newColor);
        setTheme({
          ...theme,
          barberShopId: barberShopId,
          idTheme: 1,
          highlightColor: newColor,
        });

        const updatedTheme = {
          idTheme: 1,
          backgroundColor: "#171717",
          barberShopId: barberShopId,
          highlightColor: newColor,
          primaryColor: "#FFFFFF",
          secondaryColor: "#000000",
          textColor: "#FFFFFF",
          textContrast: "#000000",
        };

        const response = await fetch(`${REACT_APP_API}/theme`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTheme),
        });

        console.log("Resposta do servidor:", JSON.stringify(response.status));

        await AsyncStorage.setItem(
          "@Barber:theme",
          JSON.stringify(updatedTheme)
        );
      }
    } catch (error) {
      console.error("Error updating accent color:", error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        accentColor,
        updateColor,
        localTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
