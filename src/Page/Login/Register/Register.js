import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Button } from 'react-native';

import styles from './RegisterStyle';

const RegisterInfor = ({ navigation }) => {
    return (
        <>
            <View style={styles.registerContainer}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.registerContent}>
                    <View >
                        <Text style={styles.textInfor}>Số điện thoại:</Text>
                        <TextInput keyboardType={'numeric'} style={styles.inputInfor} placeholder="Nhập số điện thoại " />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.registerBtn}
                            // onPress={() => navigation.navigate('RegisterInfor')}
                        >
                            <Text style={styles.btnText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default RegisterInfor;