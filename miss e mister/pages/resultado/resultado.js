import React, { useState, useEffect } from "react";
import { Text, View, Image, Alert } from "react-native";
import styles from './styles.js';
import Menu from "../../components/menu/menu.js";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function Resultado({ navigation }) {
    const [resultados, setResultados] = useState([]);
    const [categoria, setCategoria] = useState('miss'); 

    useEffect(() => {
        buscarResultadosMiss();
    }, []);

    const buscarResultadosMiss = async () => {
        try {
            const response = await fetch(`http://192.168.56.2/api/select_miss/?categoria=miss`);
            const data = await response.json();
            setResultados(data);
            setCategoria('miss');
        } catch (error) {
            setResultados([]);
            setCategoria('miss');
        }
    };

    const buscarResultadosMister = async () => {
        try {
            const response = await fetch(`http://192.168.56.2/api/select_mister/?categoria=mister`);
            const data = await response.json();
            setResultados(data);
            setCategoria('mister');
        } catch (error) {
            setResultados([]);
            setCategoria('mister');
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
            <Text>Resultado</Text>
            <View style={styles.categorias}>
                <TouchableOpacity onPress={buscarResultadosMiss}>
                    <Text style={styles.feminino}>Miss</Text>
                </TouchableOpacity>
                <Text>/</Text>
                <TouchableOpacity onPress={buscarResultadosMister}>
                    <Text style={styles.masculino}>Mister</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scroll}>
                <ScrollView>
                    {categoria === 'miss' && <Text style={styles.txtCategoriaMiss}>Miss</Text>}
                    {categoria === 'mister' && <Text style={styles.txtCategoriaMister}>Mister</Text>}
                    {resultados.length === 0 ? (
                        <Text>Nenhum resultado encontrado, vote em algum aluno(a)</Text>
                    ) : (
                        resultados.map((resultado, index) => (
                            <View key={index} style={styles.resultado}>
                                <Text>Nome: {resultado.nome}</Text>
                                <Text>Curso: {resultado.curso}</Text>
                                <Text>Pontos: {resultado.pontos}</Text>
                            </View>
                        ))
                    )}
                </ScrollView>
            </SafeAreaView>
            <Menu />
        </View>
    );
}

export default Resultado;
