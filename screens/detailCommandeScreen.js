import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import {format} from "date-fns";
import DropDownPicker from 'react-native-dropdown-picker';
import axiosInstance from "../config/axios";


const DetailCommandeScreen =({navigation,route}) => {

    const commande = route.params
    const [open, setOpen] = useState(false)
    const [etatsListe, setEtatsListe] = useState()
    const [value, setValue] = useState(false)
    return(
        <View style={styles.container}>
            <Text style={styles.titre}>Commande n° {commande.commande.idCommande}</Text>
            <Text style={styles.info}>Table n° {commande.commande.noTable}</Text>
            <Text style={styles.info}>Date de la commande : {format(new Date(commande.commande.dateCommande.replace(/ /g, "T")), "HH:mm dd/MM/yyyy ")}</Text>
            <Text style={styles.status}>Statut de la commande : {commande.commande.idStatut.libelleStatut}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    titre: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom:20
    },
    info : {
        fontSize: 18,
        marginBottom: 5
    },
    status : {
        fontSize: 20,
        color: "coral"
    }
})

export default DetailCommandeScreen;