import { useEffect } from "react";
import AppRoutes from "./src/routes/app.routes";
import * as Notifications from "expo-notifications";

import { useContext, useEffect, useState } from "react";
import { ThemeProvider as CustomThemeContext } from "./src/global/styles/themeProvider";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export default function App() {
  return (
    <CustomThemeContext>
      <AppRoutes />
    </CustomThemeContext>
  );
}
