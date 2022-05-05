import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import TextInput from "../components/textInput";
import axios from "../config/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen =({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            /*const response = await axios.post("/login_check",{
                "username" : username,
                "password" : password
            })
            const token = response.data.token;
            //Stocker le token
            await AsyncStorage.setItem('token',token)*/
            navigation.replace("MainTab");
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Connexion
            </Text>
            <View style={styles.input}>
                <TextInput
                    icon = "mail"
                    placeholder="Entrer votre mail"
                    keyboardType="email-address"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    icon = "key"
                    placeholder="Votre mot de passe"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.textButton}>Connection</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title :{
        color:"#225e4b",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 40
    },
    input: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10
    },
    button: {
        borderWidth: 1,
        borderRadius: 25
    },
    textButton :{
        padding: 10
    }
})

export default LoginScreen;