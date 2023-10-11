import React, { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Text } from "react-native";

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 5000); 
  }, []);

  return (
    <View>
      <Text style={style.container}>This is Splash page.</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 50
  }
})
