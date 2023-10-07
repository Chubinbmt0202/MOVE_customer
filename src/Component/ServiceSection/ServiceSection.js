import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './ServiceSectionStyles';
import ServiceItem from './ServiceSectionStyle';


const ServiceSection = () => {
    return (
        <View style={styles.categoryContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Dịch vụ và sửa chữa</Text>
            </View>
            <View style={styles.listServiceContainer}>
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
            </View>
        </View>
    );
};

export default ServiceSection;