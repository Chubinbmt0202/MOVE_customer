// BottomNavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function BottomNavigationBar({ navigation }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60 }}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyService')}>
        <Text>MyService</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Help')}>
        <Text>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomNavigationBar;
