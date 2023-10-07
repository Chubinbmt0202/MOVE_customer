import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/Page/Splash/Splash";
import OnBoard1 from "./src/Page/OnBoard/Onboard1";
import OnBoard2 from "./src/Page/OnBoard/Onboard2";

const Stack = createStackNavigator();

export default function App() {
  const forFade = ({ current }) => ({
    cardStyle: {
        opacity: 0,
    },
});
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false
         }}
        initialRouteName="Slpash"
      >
        <Stack.Screen name="Slpash" component={Splash}   />
        <Stack.Screen name="OnBoard1" component={OnBoard1} />
        <Stack.Screen name="OnBoard2" component={OnBoard2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

