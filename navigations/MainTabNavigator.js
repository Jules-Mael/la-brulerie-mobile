import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";


const Tab = createBottomTabNavigator();

const MainTabNavigator = ()=> {
    return(
        <Tab.Navigator
            initialRouteName="ListCommandes"
            screenOptions={{
                headerStyle : {
                    backgroundColor:"#2E4857"
                },
                headerTitleStyle: {
                    color:"#FFF",
                    fontWeight:'bold'
                },
                headerTitleAlign :"center",
                tabBarStyle : {
                    backgroundColor: "#2E4857",
                    borderRadius:25,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    marginHorizontal: 10
                },
                tabBarActiveTintColor: "#F18F01",
                tabBarInactiveTintColor: "#FFF"
            }}
        >

            <Tab.Screen
                name='ListCommandes'
                component={StackNavigator}
                options={ {
                    headerShown: false,
                    tabBarLabel: "Commandes",
                    tabBarIcon: ({focused,color}) =>
                        <MaterialCommunityIcons name="post" size={focused ? 28 : 20} color={color} />
                }}
            />

        </Tab.Navigator>
    )

}

export default MainTabNavigator;