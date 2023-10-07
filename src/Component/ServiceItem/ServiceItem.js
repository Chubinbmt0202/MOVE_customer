import React from 'react';
import { View, Image } from 'react-native';

import styles from './ServiceItemStyle';
import Images from '../../../assets/Image';

const ServiceItem = ({ navigation }) => {
    return (
        <View style={styles.service}>
            <Image style={styles.image} source={Images.favicon} />
        </View>
    );
};

export default ServiceItem;