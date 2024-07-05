import React, { useMemo, useState } from "react";
import { Text, View, Image, TextInput, Alert } from "react-native";
import styles from './styles.js';
import Menu from "../../components/menu/menu.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import RadioGroup from 'react-native-radio-buttons-group';
import axios from 'axios';

function Alunos({ navigation }) {

    const categoria = useMemo(() => ([
        {
            id: '1',
            label: 'Miss',
            value: 'Miss',
            color: '#1C8DE6',
            borderColor: '#ccc',
            size: 23,
        },
        {
            id: '2',
            label: 'Mister',
            value: 'Mister',
            color: '#1C8DE6',
            borderColor: '#ccc',
            size: 23,
        }
    ]), []);

    const [selectId, setSelectId] = useState();
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');

    const cadastrar = () => {
        let token = 'Q!W@ee344%%R';
        const selecionarCategoria = categoria.find(cat => cat.id === selectId)?.value;

        if (nome.trim() !== '' && curso.trim() !== '' && selecionarCategoria) {
            axios.post('http://172.16.42.90/api/cadastro_alunos/', { token, nome, curso, categoria: selecionarCategoria })
                .then(response => {
                    const data = response.data;
                    if (data.success) {
                        Alert.alert('Sucesso', data.message);
                    } else {
                        Alert.alert('Erro', data.message);
                    }
                    navigation.navigate('Alunos');
                })
                .catch(error => {
                    console.log('Erro ao enviar dados:', error);
                    Alert.alert('Erro', 'Erro ao enviar dados');
                });
        } else {
            Alert.alert('Erro', 'Preencher Campos!!!');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../assets/magali.png")} style={{ width: 70, height: 90 }} />
                <Text style={styles.titleMiss}>Miss </Text>
                <Text style={styles.e}>& </Text>
                <Text style={styles.titleMister}>Mister</Text>
                <Image source={require("../../assets/cascao.png")} style={{ width: 70, height: 90 }} />
            </View >
            <Text>Cadastro de aluno(a)</Text>
            <View style={styles.alunosContainer}>
                <Text>Nome aluno(a): </Text>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={(text) => setNome(text)} value={nome} />
                </View>
                <Text>Curso: </Text>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={(text) => setCurso(text)} value={curso} />
                </View>
                <RadioGroup
                    radioButtons={categoria}
                    onPress={setSelectId}
                    selectedId={selectId}
                    layout="row"
                />
            </View>
            <TouchableOpacity style={styles.btnCadastrar} onPress={cadastrar}>
                <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
            <Menu />
        </View>
    );
}

export default Alunos;
