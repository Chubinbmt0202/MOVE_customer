import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        marginTop: 10,
    },
    listServiceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'start',
    },
});

export default styles;