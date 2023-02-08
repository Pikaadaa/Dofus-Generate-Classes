import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes } from "./Routes";
import { AllClassesScreen } from "../screens/AllClassesScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GenerateClasseScreen } from "../screens/GenerateClasseScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const tabBarIcon1 = ({ color }: any) => (
    <MaterialIcons name="face" size={30} color="black" />
);

const tabBarIcon2 = ({ color }: any) => (
    <FontAwesome5 name="dice" size={30} color="black" />
)


export const BottomTabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name={Routes.ALL_CLASSES_SCREEN} component={AllClassesScreen} options={{ tabBarIcon: tabBarIcon1 }} />
            <Tab.Screen name={Routes.GENERATE_CLASS_SCREEN} component={GenerateClasseScreen} options={{ tabBarIcon: tabBarIcon2 }} />
        </Tab.Navigator>
    )
};



