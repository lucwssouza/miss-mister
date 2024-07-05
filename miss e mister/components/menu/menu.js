import React, { useState } from "react";
import { View, Image, TouchableOpacity, Modal } from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

function Menu() {
    const navigation = useNavigation();

    return (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Jurados')}>
                <Image source={require("../../assets/jurado.png")} style={styles.iconMenu} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Alunos')}>
                <Image source={require("../../assets/alunos.png")} style={styles.iconMenu} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Votação')}>
                <Image source={require("../../assets/votar.png")} style={styles.iconMenu} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Resultado')}>
                <Image source={require("../../assets/resultado.png")} style={styles.iconMenu} />
            </TouchableOpacity>
        </View>
    );
}

export default Menu;
