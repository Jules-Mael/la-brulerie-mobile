import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CommandeScreen from "../screens/commandeScreen";
import DetailCommandeScreen from "../screens/detailCommandeScreen";
import StatutCommandeScreen from "../screens/statutCommandeScreen";


// Créer le navigator
const Stack = createNativeStackNavigator();

// Paramétrer le stack
const StackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Commandes"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#2E4857"
                },
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 24,
                    color:"#FFF",
                    fontWeight:'bold'
                },
                headerTintColor : "#FFF"
            }}
        >
            <Stack.Screen
                name="Commandes"
                component={CommandeScreen}
                options={{
                    title: "Liste des commandes"
                }}
            />
            <Stack.Screen
                name="Commande"
                component={DetailCommandeScreen}
                options={{
                    title: "Détail de la commande"
                }}
            />
            <Stack.Screen
                name="StatutCommande"
                component={StatutCommandeScreen}
                options={{
                    title: "Changer le statut de la commande"
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;