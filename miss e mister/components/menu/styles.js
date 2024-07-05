import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menu: {
        // borderWidth: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: 60,
        backgroundColor: '#F88854',
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    },
    iconMenu: {
        width: 38,
        height: 38
    }
});