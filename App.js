import AppRoutes from "./src/routes/app.routes";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import {
  handleTokenPush,
  useNotificationHandler,
  setNotificationChannel,
  requestNotificationPermissions,
} from "./src/global/Notifications";
import { ThemeProvider } from "./src/global/styles/themeProvider";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export default function App() {
  const notification = useNotificationHandler();

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
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
