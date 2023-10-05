import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./src/Page/Splash/Splash";
import OnBoard1 from "./src/Page/OnBoard/Onboard1";

const Stack = createStackNavigator();

export default function App() {
  const forFade = ({ current }) => ({
    cardStyle: {
        opacity: 0,
    },
});
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Slpash" component={Splash}   />
        <Stack.Screen name="OnBoard1" component={OnBoard1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
