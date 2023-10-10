import React from "react";
import { Text, View } from "react-native";
import BottomNavigationBar from "../../Component/Navigation/Navigation";

export default function MyService({navigation}) {
    return (
        <View>
            <Text>This is a MyService screen</Text>
            <BottomNavigationBar navigation={navigation} />
        </View>
    )
}