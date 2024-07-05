import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Jurados from "./pages/jurados/jurados";
import Alunos from "./pages/alunos/alunos";
import Votação from "./pages/votação/votação";
import Resultado from "./pages/resultado/resultado";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Jurados" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Jurados" component={Jurados}></Stack.Screen>
                <Stack.Screen name="Alunos" component={Alunos}></Stack.Screen>
                <Stack.Screen name="Votação" component={Votação}></Stack.Screen>
                <Stack.Screen name="Resultado" component={Resultado}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;