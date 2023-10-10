import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigationBar from '../../Component/Navigation/Navigation';

import { NavigationContainer } from '@react-navigation/native';

import styles from './HomeStyle';

export default function HomePage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.locationContainer}>
                <FontAwesome style={styles.locationIcon} name="map-marker" size={24} color="black" />
                <Text>23 Nguyễn Văn Linh</Text>
            </View>
            <View style={styles.inputContainer}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput style={styles.searchInput} placeholder="Tìm kiếm..." keyboardType="numeric" />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.serviceContainer}
            >
            </ScrollView>
            <BottomNavigationBar navigation={navigation} />
        </View>
    );
};
