import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import axiosInstance from "../config/axios";


const CommandeScreen =({navigation}) => {

    const [commandes, setCommandes] = useState();

    const handleCommande = async () => {
        try {
            const response = await axiosInstance.get("/commandes")
            const commandeRecup = response.data;
            setCommandes(commandeRecup);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        handleCommande()
    },[])

    return(
        <View style={styles.container}>
            <FlatList
                data={commandes}
                renderItem={({item})=>
                    <View style={styles.list}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("Commande", {
                                commande: item
                            })}
                        >
                            <Text style={styles.textcommande}>Commande n°{item.idCommande} - Table n°{item.noTable}</Text>
                            <Text style={styles.textstatut}>Statut de la commande : {item.idStatut.libelleStatut}</Text>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={(item)=>item.idCommande}
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
    textstatut: {
        fontSize: 15,
        fontStyle: "italic",
        color: "coral"
    }
})

export default CommandeScreen;