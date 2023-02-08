import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { Routes } from "./Routes";
import { AllClassesScreen } from "../screens/AllClassesScreen";
import { ClasseDetailScreen } from "../screens/ClasseDetailScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GenerateClasseScreen } from "../screens/GenerateClasseScreen";
import { BottomNavigation } from "react-native-paper";
import { BottomTabNavigator } from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

export const Navigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator} />
                <Stack.Screen name={Routes.ALL_CLASSES_SCREEN} component={AllClassesScreen} />
                <Stack.Screen name={Routes.CLASSE_DETAIL_SCREEN} component={ClasseDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
};



