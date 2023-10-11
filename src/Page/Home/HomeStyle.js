import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 18,
        backgroundColor: '#ffffff',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        marginRight: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        borderRadius: 15,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#ede9e9',
    },
    searchInput: {
        flex: 1,
        marginLeft: 5,
    },
});

export default styles;