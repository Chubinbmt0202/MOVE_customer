import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import styles from "./Onboard1Style";

export default function OnBoard1({ navigation }) {
  return (
    <>
      {" "}
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipContainer}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Text style={styles.boardTitle}>
            F7 cho phép đặt sửa bất kì đâu bất kì nơi nào.
          </Text>
          <Text style={styles.boardSlogan}>
            Luôn đứng đầu về dịch vụ cứu hộ sửa chữa xe, đa dạng dịch vụ về xe.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.boardSection}>
            <View style={styles.dotContainer}>
              <View style={styles.dot1} />
              <View style={styles.dot2} />
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("OnBoard2")}
                activeOpacity={0.8}
                style={styles.btnTextContainer}
              >
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
