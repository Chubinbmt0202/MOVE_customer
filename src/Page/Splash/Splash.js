import React from "react";
import { Button, Text, View } from "react-native";



export default function Splash({navigation}) {
    function handleSlide() {
        navigation.navigate("OnBoard1")
    }
    return (
        <View>
            <Text>Trung anh đang ở trang home</Text>
            <Button title="Click me" onPress={handleSlide} />
        </View>
        
    )
}