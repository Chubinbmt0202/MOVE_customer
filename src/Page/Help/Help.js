import React, { useEffect, useState, useRef } from "react";
import * as Notifications from "expo-notifications";
import io from "socket.io-client";
import pushNotificationsRegister from "../../Config/PushNotificationRegister";
import * as Location from "expo-location";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./HelpStyle";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Help({ navigation }) {
  const socket = io("https://railwaytest-production-a531.up.railway.app/");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [receiveRequests, setReceiveRequests] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    // Cập nhật receiveRequests thành true, đảm bảo ứng dụng luôn ở chế độ nhận yêu cầu
    setReceiveRequests(true);

    // Gọi hàm push để đăng kí và lấy mã thông báo Expo Push Token
    // Mã token được lưu trong state variable "expoPushToken "
    pushNotificationsRegister().then((token) => setExpoPushToken(token));

    //Đoạn mã này lắng nghe sự kiện khi có thông báo được nhận.
    //Khi có thông báo mới, nó sẽ cập nhật giá trị của notification (state variable) bằng thông báo mới.
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });
    //Đoạn mã này lắng nghe sự kiện khi người dùng tương tác với thông báo, chẳng hạn như nhấn vào thông báo.
    //Khi có tương tác xảy ra, nó in thông tin tương tác ra console.
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });
    // Huỷ các lắng nghe và giải phóng tài nguyên
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const HandleBack = () => {
    navigation.navigate("HomePage");
  };

  const handleSendRequest = async () => {
    // Gửi expo push token lên máy chủ để bật chế độ nhận yêu cầu
    socket.emit("send-expo-push-token", { token: expoPushToken });
    console.log("This is ", expoPushToken);
    setReceiveRequests(true); // Bật chế độ nhận yêu cầu

    console.log("Đây là vị trí của tôi \n: ", location);
    socket.emit("rescue-request", {
      message: "Yêu cầu cứu hộ từ Cong!",
      location: location,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={HandleBack} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
            description="You are here!"
          ></Marker>
        </MapView>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnTextContainer}
        onPress={handleSendRequest}
      >
        <Text style={styles.btnText}>Gửi yêu cầu cứu hộ</Text>
      </TouchableOpacity>
    </View>
  );
}
