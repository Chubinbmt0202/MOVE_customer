import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import styles from '../Login/LoginStyle';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '/CODE/Bài tập/MOVE/move_customer/src/Config/Firebase';
import firebase from 'firebase/compat/app';

const Login = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    // const sendVerification = () => {
    //     const phoneProvider = new firebase.auth.PhoneAuthProvider();
    //     phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current).then(setVerificationId);
    //     setPhoneNumber('');

    //     // setTimeout(() => {
    //     //     navigation.navigate('OtpVerify');
    //     // }, 20000);
    // };

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then((vid) => {
                setVerificationId(vid);
                navigation.navigate('OtpVerify', { verificationId: vid, phoneNumber });
            })
            .catch((error) => {
                alert(error);
            });
    };

    // const confirmCode = () => {
    //     const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    //     firebase
    //         .auth()
    //         .signInWithCredential(credential)
    //         .then(() => {
    //             setCode('');
    //         })
    //         .catch((error) => {
    //             alert(error);
    //         });
    //     Alert.alert('ok');
    // };
    return (
        <View style={styles.loginContainer}>
            <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig} />
            <Text style={styles.title}>Đăng nhập & đăng ký</Text>
            <Text>Điền số điện thoại của bạn:</Text>
            <View style={styles.loginContent}>
                <TextInput
                    placeholder="Phone Number with Country code..."
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                    autoCompleteType="tel"
                    style={styles.inputContent}
                />
            </View>
            <View style={styles.loginBtn}>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContinue} onPress={sendVerification}>
                    <Text style={styles.btnText}>Send Otp</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnRegister}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.loginContent}>
                <TextInput
                    placeholder="Phone Number with Country code..."
                    onChangeText={setCode}
                    keyboardType="number-pad"
                    autoCompleteType="tel"
                    style={styles.inputContent}
                />
            </View>
            <View style={styles.loginBtn}>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContinue} onPress={confirmCode}>
                    <Text style={styles.btnText}>Verifier Otp</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

export default Login;