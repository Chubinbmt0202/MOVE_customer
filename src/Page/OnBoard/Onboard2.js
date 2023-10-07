import React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import styles from "./Onboard2Style";

export default function OnBoard2() {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipContainer}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Text style={styles.boardTitle}>Hỗ trợ 24/7 chỉ với 1 cú chạm</Text>
          <Text style={styles.boardSlogan}>
            Yêu cầu cứu hộ với ngón tay của bạn
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
