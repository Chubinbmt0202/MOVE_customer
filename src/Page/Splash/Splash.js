import React from "react";
import { Button, Text, View,TouchableOpacity  } from "react-native";
import styles from "./SplashStyle";

export default function Splash({ navigation }) {
  function handleSlide() {
    navigation.navigate("OnBoard1");
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.appNameLogo}>F7</Text>
          <Text style={styles.appNameDetail}>Secure Move</Text>
          <Text>Trung Anh</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("OnBoard1")}
            activeOpacity={0.8}
            style={styles.btnTextContainer}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
