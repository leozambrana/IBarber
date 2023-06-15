import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_API } from "../../sdk";
import localTheme from "./theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [accentColor, setAccentColor] = useState("#1F2F3C");
  const [themeColors, setThemeColors] = useState(localTheme.colors);
  const barberShopId = 2;

  const updateThemeColors = (updateColors) => {
    setThemeColors((prevColors) => ({
      ...prevColors,
      ...updateColors,
    }));
  };

  useEffect(() => {
    AsyncStorage.setItem("themeColors", JSON.stringify(themeColors));
  }, [themeColors]);

  useEffect(() => {
    getThemeFromStorage();
    getThemeFromDatabase();
  }, []);

  const getThemeFromDatabase = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem("@Barber:theme");

      if (storedTheme) {
        setTheme(storedTheme);
        return; // Exit early if the accent color is already stored
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

  const getThemeFromStorage = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem("@Barber:theme");

      if (storedTheme) {
        const parsedTheme = JSON.parse(storedTheme);
        setTheme(parsedTheme);
        setAccentColor(parsedTheme.highlightColor);

        return;
      }
    } catch (error) {
      console.error("Error retrieving theme from storage:", error);
    }
  };

  const updateColor = async (newColor) => {
    try {
      if (newColor !== accentColor) {
        setAccentColor(newColor);

        // Update the entire theme object with the new accent color
        const updatedTheme = {
          backgroundColor: "#171717",
          barberShopId: barberShopId,
          highlightColor: newColor,
          idTheme: 1,
          primaryColor: "#FFFFFF",
          secondaryColor: "#000000",
          textColor: "#FFFFFF",
          textContrast: "#000000",
        };

        await fetch(`${REACT_APP_API}/theme`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTheme),
        })
          .then((response) => {
            console.log(
              "Resposta do servidor:",
              JSON.stringify(response.status)
            );
          })
          .catch((error) => {
            console.error("Error updating accent color:", error);
          });

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
        themeColors,
        updateThemeColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
