import React from "react";
import { Button, View } from "react-native";
import { Text } from "react-native";

export default function Splash({navigation}) {
    const HandlePage = () => {
        navigation.navigate("HomePage")
    }
  return (
    <View>
      <Text>This is Splash page.</Text>
      <Button onPress={HandlePage}>Click here</Button>
    </View>
  );
}
