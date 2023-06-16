import { useEffect } from "react";
import AppRoutes from "./src/routes/app.routes";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export default function App() {
  return ( 
      <AppRoutes/>
  );
}
