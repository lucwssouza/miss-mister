import React, { useEffect, useState } from "react";
import { Text, View, Image, TextInput, Alert } from "react-native";
import styles from "./styles.js";
import Menu from "../../components/menu/menu.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

function Votação({ navigation }) {
    const [jurados, setJurados] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [selectedJurado, setSelectedJurado] = useState("");
    const [selectedAluno, setSelectedAluno] = useState("");
    const [elegancia, setElegancia] = useState("");
    const [desenvoltura, setDesenvoltura] = useState("");
    const [simpatia, setSimpatia] = useState("");
    const [reciclavel, setReciclavel] = useState("");

    useEffect(() => {
        axios.get('http://172.16.42.90/api/select_jurados/')
            .then(response => {
                setJurados(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        axios.get('http://172.16.42.90/api/select_alunos/')
            .then(response => {
                setAlunos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const cadastrar = () => {
        if (!selectedJurado) {
            Alert.alert("Por favor, selecione um jurado.");
            return;
        }
        if (!selectedAluno) {
            Alert.alert("Por favor, selecione um aluno.");
            return;
        }
        if (
            elegancia === "" ||
            desenvoltura === "" ||
            simpatia === "" ||
            reciclavel === ""
        ) {
            Alert.alert("Por favor, preencha todos os campos de pontuação.");
            return;
        }

        const selectedJuradoValores = jurados.find(jurado => jurado.id === selectedJurado);
        const selectedAlunoValores = alunos.find(aluno => aluno.id === selectedAluno);

        if (!selectedJuradoValores || !selectedAlunoValores) {
            Alert.alert("Jurado ou aluno não encontrado. Por favor, selecione novamente.");
            return;
        }

        const votoData = {
            token: 'Q!W@ee344%%R',
            jurado: selectedJurado,
            aluno: selectedAlunoValores.nome,
            elegancia: parseInt(elegancia),
            desenvoltura: parseInt(desenvoltura),
            simpatia: parseInt(simpatia),
            reciclavel: parseInt(reciclavel),
            juradonome: selectedJuradoValores.nome,
            curso: selectedAlunoValores.curso,
            categoria: selectedAlunoValores.categoria,
        };

        axios.post('http://172.16.42.90/api/votação/', votoData)
            .then(response => {
                Alert.alert(response.data.message);
            })
            .catch(error => {
                console.error(error);
                Alert.alert("Erro ao cadastrar!");
            });
    };
    
    const handleNumberInput = (value, setValue) => {
        const num = parseInt(value, 10);
        if (!isNaN(num) && num >= 0 && num <= 10) {
            setValue(value);
        } else if (value === "") {
            setValue(value);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../assets/magali.png")} style={{ width: 70, height: 90 }} />
                <Text style={styles.titleMiss}>Miss </Text>
                <Text style={styles.e}>& </Text>
                <Text style={styles.titleMister}>Mister</Text>
                <Image source={require("../../assets/cascao.png")} style={{ width: 70, height: 90 }} />
            </View>
            <Text style={styles.txtvotar}>Votar</Text>
            <View style={styles.votacaoContainer}>
                <View style={styles.selectContainer}>
                    <Text>Jurado:</Text>
                    <View style={styles.option}>
                        <Picker
                            selectedValue={selectedJurado}
                            onValueChange={(itemValue, itemIndex) => setSelectedJurado(itemValue)} style={styles.optiontxt}
                        >
                            <Picker.Item label="Selecione um jurado" value="" />
                            {Array.isArray(jurados) && jurados.map((jurado, index) => (
                                <Picker.Item key={index} label={jurado.nome} value={jurado.id} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={styles.selectContainer}>
                    <Text>Nome do aluno:</Text>
                    <View style={styles.option}>
                        <Picker
                            selectedValue={selectedAluno}
                            onValueChange={(itemValue, itemIndex) => setSelectedAluno(itemValue)} style={styles.optiontxt}
                        >
                            <Picker.Item label="Selecione um aluno" value="" />
                            {Array.isArray(alunos) && alunos.map((aluno, index) => (
                                <Picker.Item key={index} label={aluno.nome} value={aluno.id} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={styles.inputRow}>
                    <Text>Elegância:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={elegancia}
                        onChangeText={(value) => handleNumberInput(value, setElegancia)}
                        maxLength={2}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Desenvoltura:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={desenvoltura}
                        onChangeText={(value) => handleNumberInput(value, setDesenvoltura)}
                        maxLength={2}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Simpatia:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={simpatia}
                        onChangeText={(value) => handleNumberInput(value, setSimpatia)}
                        maxLength={2}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text>Reciclável:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={reciclavel}
                        onChangeText={(value) => handleNumberInput(value, setReciclavel)}
                        maxLength={2}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.btnCadastrar} onPress={cadastrar}>
                <Text style={styles.txtBtn}>Votar</Text>
            </TouchableOpacity>
            <Menu />
        </View>
    );
}

export default Votação;
