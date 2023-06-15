import AppRoutes from "./src/routes/app.routes";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import {
  handleTokenPush,
  useNotificationHandler,
  setNotificationChannel,
  requestNotificationPermissions,
} from "./src/global/Notifications";
import { AccentColorProvider } from "./src/global/styles/accentColorProvider";

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
    <AccentColorProvider>
      <AppRoutes />
    </AccentColorProvider>
  );
}
