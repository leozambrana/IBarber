import React from 'react'
//navigate
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//routes
import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';


const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>      
        <Stack.Screen name="Auth" options={{headerShown:false}} component={Auth}/>
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

export default AppRoutes;