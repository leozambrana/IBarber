import React, { useContext } from "react";
import theme from "../global/styles/theme";

//navigate
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//ícones
import { Ionicons } from "@expo/vector-icons";

//routes
import PreLogin from "../pages/PreLogin";
import LoginScreen from "../pages/Login";
import RegisterScreen from "../pages/Register";
import SplashScreen from "../components/Splash";
import HomeScreen from "../pages/Home";
import ScheduleScreen from "../pages/Schedule";
import BarberInfoScreen from "../pages/BarberInfo";
import ProfileScreen from "../pages/Profile";
import CalendarScreen from "../pages/Calendar";
import SettingsScreen from "../pages/Settings";
import EmployeesScreen from "../pages/Employees";
import BarberScreen from "../pages/BarberShop";
import ServiceAdd from "../pages/ServiceAdd";
import BusinessHoursScreen from "../pages/BusinessHours";
import AutomatedBookingScreen from "../pages/AutomatedBooking";
import { ThemeContext } from "../global/styles/themeProvider";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../sdk/auth/userProvider";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  const { localTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={localTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            options={{ headerShown: false }}
            component={Auth}
          />
          <Stack.Screen
            name="TabsNavigator"
            options={{ headerShown: false }}
            component={TabsNavigator}
          />
          <Stack.Screen
            name="SplashScreen"
            options={{ headerShown: false }}
            component={SplashScreen}
          />
          <Stack.Screen
            name="AutomatedBookingScreen"
            options={{ headerShown: false }}
            component={AutomatedBookingScreen}
          />
          <Stack.Screen
            name="CalendarScreen"
            options={{ headerShown: false }}
            component={CalendarScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const Auth = () => {
  const { localTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={localTheme}>
      <Stack.Navigator initialRouteName="PreLogin">
        <Stack.Screen
          name="PreLogin"
          options={{ headerShown: false }}
          component={PreLogin}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

const TabsNavigator = ({ route }) => {
  const { accentColor, localTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  // a variável userType deve ser recebida do backend
  // const response = route.params?.response;
  // const status = response.adminStatus;
  // const employeeId = response.employeeId;
  // let userType;
  // if (status) {
  //   userType = "admin";
  // } else if (!status && employeeId) {
  //   userType = "barber";
  // } else {
  //   userType = "customer";
  // }

  // aqui o userType é definido de acordo com o usuário logado pegando a informação do contexto
  let userType;
  if (user.adminStatus) {
    userType = "admin";
  } else if (!user.adminStatus && user.employeeId) {
    userType = "barber";
  } else {
    userType = "customer";
  }

  return (
    <ThemeProvider theme={localTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Agendar") {
              iconName = focused ? "ios-calendar" : "ios-calendar-outline";
            } else if (route.name === "Informações") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Perfil") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            } else if (route.name === "Barbeiro") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            } else if (route.name === "Agenda") {
              iconName = focused ? "ios-today" : "ios-today-outline";
            } else if (route.name === "Funcionários") {
              iconName = focused ? "ios-people" : "ios-people-outline";
            } else if (route.name === "Configurações") {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            } else if (route.name === "Serviços") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            } else if (route.name === "Horários") {
              iconName = focused ? "ios-time" : "ios-time-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: theme.surface,
            borderTopColor: "transparent",
          },
          tabBarActiveTintColor: `${accentColor}`,
          tabBarInactiveTintColor: `${accentColor}98`,
          headerShown: false,
        })}
      >
        {userType === "admin" && (
          <>
            <Tab.Screen name="Serviços" component={ServiceAdd} />
            <Tab.Screen name="Funcionários" component={EmployeesScreen} />
            <Tab.Screen name="Horários" component={BusinessHoursScreen} />
            <Tab.Screen name="Configurações" component={SettingsScreen} />
          </>
        )}

        {userType === "barber" && (
          <>
            <Tab.Screen name="Barbeiro" component={BarberScreen} />
          </>
        )}

        {userType === "customer" && (
          <>
            <Tab.Screen name="Agendar" component={ScheduleScreen} />
            <Tab.Screen name="Informações" component={BarberInfoScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
          </>
        )}
      </Tab.Navigator>
    </ThemeProvider>
  );
};

export default AppRoutes;
