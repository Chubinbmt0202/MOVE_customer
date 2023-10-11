import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Button } from 'react-native';

import styles from './RegisterStyle';

const RegisterInfor = ({ navigation }) => {
    return (
        <>
            <View style={styles.registerContainer}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.registerContent}>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>Họ và tên:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Nhập họ và tên.." />
                    </View>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>Email:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Nhập email.." />
                    </View>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>Hãng xe:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Nhập hãng xe.." />
                    </View>
                    <View style={styles.registerInput}>
                        <Text style={styles.textInfor}>Biển số xe:</Text>
                        <TextInput style={styles.inputInfor} placeholder="Biển số xe.." />
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