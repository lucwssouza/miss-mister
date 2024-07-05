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
    categorias: {
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
        top: 3,
    },
    scroll: {
        borderWidth: 1,
        top: 25,
        width: '80%',
        height: '50%',
        padding: 10,
        borderRadius: 13
    },
    resultado: {
        borderBottomWidth: 0.6,
        borderColor: '#ccc',
        marginBottom: 5
    },
    txtCategoria: {
        textAlign: 'center',
    },
    txtCategoriaMiss: {
        textAlign: 'center',
        color: 'rgb(207, 23, 167)',
    },
    txtCategoriaMister: {
        textAlign: 'center',
        color: 'rgb(28, 102, 187)',
    },
    feminino: {
        color: 'rgb(207, 23, 167)',
    },
    masculino: {
        color: 'rgb(28, 102, 187)',
    }
});
