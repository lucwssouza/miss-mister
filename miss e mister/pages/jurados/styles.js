import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: '100%',
        paddingTop: 20,
        backgroundColor: '#F88854'
    },
    titleMiss: {
        color: '#e364bc',
        fontSize: 35,
    },
    titleMister: {
        color: '#2a87b7',
        fontSize: 35,
    },
    e: {
        color: '#696363',
        fontSize: 38,
    },
    titleCaipirinha: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    juradosContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '60%',
        height: 27,
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#fff'
    },
    btnCadastrar: {
        marginTop: 15,
        borderWidth: 1,
        padding: 8,
        width: 150,
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: '#1C8DE6'
    },
    txtBtn: {
        color: '#fff',
        fontWeight: 'bold'
    },
});
