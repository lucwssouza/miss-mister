import React, { useState } from "react";
import { Text, View, Image, TextInput, Alert } from "react-native";
import styles from './styles.js';
import Menu from "../../components/menu/menu.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';

function Jurados({ navigation }) {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');

    const cadastrar = () => {
        let token = 'Q!W@ee344%%R';
        if (nome.trim() !== '' && curso.trim() !== '') {
            axios.post('http://172.16.42.90/api/cadastro/', { token, nome, curso })
                .then(response => {
                    const data = response.data;
                    if (data.success) {
                        Alert.alert('Sucesso', data.message);
                    } else {
                        Alert.alert('Erro', data.message);
                    }
                    navigation.navigate('Jurados');
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
            <Text>Cadastro de jurados</Text>
            <View style={styles.juradosContainer}>
                <Text>Nome Jurado(a): </Text>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={(text) => setNome(text)} value={nome}/>
                </View>
                <Text>Curso: </Text>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={(text) => setCurso(text)} value={curso} />
                </View>
            </View>
            <TouchableOpacity style={styles.btnCadastrar} onPress={cadastrar}>
                <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
            <Menu />
        </View>
    );
}

export default Jurados;
