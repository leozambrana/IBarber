import React from "react";
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Auth = () => {
  return (
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
  );
};

const TabsNavigator = () => {
  // a variável userType deve ser recebida do backend
  const userType = "admin";

  return (
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
          } else if (route.name === "Cadastro") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#2596be",
        tabBarInactiveTintColor: "#d3eaf2",
        headerShown: false,
      })}
    >
      {userType === "admin" && (
        <>
          <Tab.Screen name="Cadastro" component={ServiceAdd} />
          <Tab.Screen name="Funcionários" component={EmployeesScreen} />
          <Tab.Screen name="Configurações" component={SettingsScreen} />
        </>
      )}

      {userType === "barber" && (
        <>
          <Tab.Screen name="Agenda" component={CalendarScreen} />
          <Tab.Screen name="Barbeiro" component={BarberScreen} />
        </>
      )}

      {userType === "customer" && (
        <>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Agendar" component={ScheduleScreen} />
          <Tab.Screen name="Informações" component={BarberInfoScreen} />
          <Tab.Screen name="Perfil" component={ProfileScreen} />
        </>
      )}
    </Tab.Navigator>
  );
};

export default AppRoutes;
