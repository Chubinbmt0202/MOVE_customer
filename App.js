import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
// page
import Splash from "./src/Page/Introduce/Splash";
import HomePage from "./src/Page/Home/Home";
import MyService from "./src/Page/MyService/MyService";
import Help from "./src/Page/Help/Help";
import Login from "./src/Page/Login/Login/Login";
import RegisterInfor from "./src/Page/Login/Register/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={RegisterInfor} />

        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MyService" component={MyService} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
