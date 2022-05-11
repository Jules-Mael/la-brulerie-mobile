import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import axiosInstance from "../config/axios";


const StatutCommandeScreen =() => {

    const [statutCommande, setStatutCommande] = useState();

    const handleStatutCommande = async () => {
        try {
            const response = await axiosInstance.get("/statutcommande")
            const statutCommandeRecup = response.data;
            setStatutCommande(statutCommandeRecup);
            console.log(statutCommande)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        handleStatutCommande()
    },[])

    return(
        <View style={styles.container}>
            <FlatList
                data={statutCommande}
                renderItem={({item})=>
                    <View style={styles.list}>
                        <Text style={styles.textcommande}>{item.libelleStatut}</Text>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    list : {
        margin: 10,
        paddingHorizontal: 80,
        borderRadius: 20,
        borderWidth: 1
    },
    textcommande: {
        fontSize: 20
    },
})

export default StatutCommandeScreen;