import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_API } from "../../sdk";
import myTheme from "./theme";
import { LogBox } from "react-native";
import { set } from "date-fns";
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);

// 1. Pegar o tema do local storage
// 2. Se não existir, pegar o tema do banco de dados
// 3. Atualizar o tema no local storage

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [localTheme, setLocalTheme] = useState(myTheme);
  const [accentColor, setAccentColor] = useState("#1F2F3C");
  const barberShopId = 2;

  useEffect(() => {
    getThemeFromDatabase();
    getThemeFromStorage();
  }, []);

  const getThemeFromStorage = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem("@Barber:theme");

      if (storedTheme) {
        const parsedTheme = JSON.parse(storedTheme);
        updateColor(parsedTheme.highlightColor);
        setLocalTheme(parsedTheme);

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
        const parsedTheme = JSON.parse(storedTheme);
        setLocalTheme(parsedTheme);
        return;
      }

      const response = await fetch(
        `${REACT_APP_API}/themes?barberShopId=${barberShopId}`
      );

      const data = await response.json();

      if (response.ok) {
        setLocalTheme(data[0]);
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

        const updatedTheme = {
          barberShopId: barberShopId,
          idTheme: 1,
          backgroundColor: "#171717",
          highlightColor: newColor,
          primaryColor: "#FFFFFF",
          secondaryColor: "#000000",
          textColor: "#FFFFFF",
          textContrast: "#000000",
        };

        setLocalTheme(updatedTheme);

        const response = await fetch(`${REACT_APP_API}/theme`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTheme),
        });

        console.log("Resposta do servidor:", JSON.stringify(response));

        if (!response.ok) {
          console.error("Error updating accent color:", response.statusText);
        }

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
        accentColor,
        updateColor,
        localTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
