import React from "react";
import { View, Text } from "react-native";
import { NavigationAction } from "@react-navigation/native";
import NavigationContainer from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons'

//screen
import HomePage from "./Home/Home";
import OnBoard1 from './OnBoard/Onboard1'
import OnBoard2 from "./OnBoard/Onboard2";
import Splash from './Splash/Splash'
import Help from "./Help/Help";

// screen name

const HomeName = "Home"
const MyService = "MyService"
const Help24 = "Help24/7"
const Profile = "Profile"

//tab

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={HomeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name

                        if (rn === HomeName) {
                            iconName = focused ? "home" : "home-outline"
                        }else if (rn === MyService) {
                            iconName = focused ? "room-service" : "room-service-outline"
                        }else if (rn === Help) {
                            iconName = focused ? "help-circle" : "help-circle-outline"
                        }else if (rn === Profile) {
                            iconName = focused ? "body" : "body-outline"
                        }

                        return <Text name={iconName} size={size} color={color} />
                    }
                })}
            >
                <Tab.Screen name={HomeName} component={HomePage} />
                <Tab.Screen name={Help24} component={Help} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}