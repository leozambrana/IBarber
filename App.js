import AppRoutes from "./src/routes/app.routes";
import * as Notifications from "expo-notifications";
import { useContext, useEffect, useState } from "react";
import {
  handleTokenPush,
  useNotificationHandler,
  setNotificationChannel,
  requestNotificationPermissions,
} from "./src/global/Notifications";
import { ThemeProvider as CustomThemeContext } from "./src/global/styles/themeProvider";
import { ThemeProvider } from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import localTheme from "./src/global/styles/theme";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export default function App() {
  const notification = useNotificationHandler();
  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    async function getThemeFromStorage() {
      const theme = await AsyncStorage.getItem("@Barber:theme");
      if (theme) {
        const parsedTheme = JSON.parse(theme);
        setTheme(parsedTheme);
      }
    }

    getThemeFromStorage();
  }, []);

  useEffect(() => {
    async function configureNotifications() {
      await setNotificationChannel();
      const permissionGranted = await requestNotificationPermissions();
      if (permissionGranted) {
        await handleTokenPush();
      }
    }
    configureNotifications();
  }, []);

  useEffect(() => {
    console.log(notification);
  }, [notification]);

  return (
    <CustomThemeContext>
      <AppRoutes />
    </CustomThemeContext>
  );
}
