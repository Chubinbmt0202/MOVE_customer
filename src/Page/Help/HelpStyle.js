import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    skipContainer: {
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    skipText: {
        marginTop: 50,
        marginRight: 30,
        fontSize: 15,
    },

    logoContainer: {
        marginTop: 80,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    logoBoard: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    },
    boardTitle: {
        width: 300,
        fontSize: 23,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 15,
    },
    boardSlogan: {
        textAlign: 'center',
        fontSize: 18,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30,
    },
    boardSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: 300,
    },
    dotContainer: {
        flexDirection: 'row',
    },
    dot1: {
        width: 13,
        height: 13,
        marginRight: 15,
        borderRadius: 13 / 2,
        backgroundColor: '#d9d9d9',
    },
    dot2: {
        width: 13,
        height: 13,
        borderRadius: 13 / 2,
        backgroundColor: '#45849f',
    },

    btnTextContainer: {
        position: 'absolute',
        bottom: 5,
        left: 10,
        right: 10,
        alignItems: 'center',
        backgroundColor: '#D83F31',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 15,
        marginBottom: 20,
    },
    btnText: {
        fontSize: 18,
        padding: 5,
        color: '#ffffff',
        fontWeight: '700',
    },
    map: {
        flex: 1,
    },
    backButton: {
        zIndex: 1,
        width: 50,
        top: 50,
        left: 20,
        borderRadius: 10,
        padding: 5,
        backgroundColor: "#ffffff"
    }
});

export default styles;