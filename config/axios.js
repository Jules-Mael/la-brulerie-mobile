import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
    "baseURL" : "http://192.168.1.50:8000/api"
});



//Définir un intercepteur permettant d'inclure le token dans chaque appel à l'api
axiosInstance.interceptors.request.use(async (request)=> {
    // Récuperer le token dans le async storage
    const  token = await AsyncStorage.getItem("token");
    if (token) {
        request.headers.Authorization= `Bearer ${token}`;
    }
    return request
})

export default axiosInstance;