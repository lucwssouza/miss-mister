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
    votacaoContainer: {
        marginTop: 20,
        width: '90%'
    },
    selectContainer: {
        marginVertical: 10,
    },
    option: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 50,
    },
    optiontxt: {
        padding: 10,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    label: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        width: 150,
        textAlign: 'center',
        right: 100
    },
    btnCadastrar: {
        marginTop: 20,
        backgroundColor: '#007bff',
        padding: 10,
        width: 150,
        borderRadius: 13,
        alignItems: 'center',
        borderWidth: 1,
    },
    txtBtn: {
        color: '#fff',
        fontWeight: 'bold'
    },
    txtvotar:{
        top: 30
    },
});
