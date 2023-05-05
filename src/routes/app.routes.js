import React from 'react'

//navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icones
import { Ionicons } from '@expo/vector-icons';

//routes
import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';
import SplashScreen from '../components/Splash';
import HomeScreen from '../pages/Home';
import BarberShopScreen from '../pages/BarberShop';
import ScheduleScreen from '../pages/Schedule';
import ProfileScreen from '../pages/Profile';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>      
        <Stack.Screen name="Auth" options={{headerShown:false}} component={Auth}/>
        <Stack.Screen name="TabsNavigator" options={{headerShown:false}} component={TabsNavigator}/>
        <Stack.Screen name="SplashScreen" options={{headerShown:false}} component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Auth = () => {
    return(
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen}/>
        <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterScreen}/>
    </Stack.Navigator>
    );
}

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Barbearia') {
            iconName = focused ? 'ios-cut' : 'ios-cut-outline';
          }else if (route.name === 'Agendar') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: '#2596be',
        tabBarInactiveTintColor: '#d3eaf2',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Barbearia" component={BarberShopScreen} />
      <Tab.Screen name="Agendar" component={ScheduleScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppRoutes;