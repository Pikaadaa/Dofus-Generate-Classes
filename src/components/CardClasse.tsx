import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Routes } from "../navigation/Routes";

interface ItemProps {
    name: string
    image: string
    description: string
    roles: string
}


export const CardClasse = ({ name, description, image, roles }: ItemProps) => {

    const navigation = useNavigation<any>();

    function navigateToDetails() {
        navigation.navigate(Routes.CLASSE_DETAIL_SCREEN, {
            name: [name],
            model: [description],
            image: [image],
            description: [description],
            roles: [roles],
        })
    }

    return (
        <TouchableOpacity onPress={navigateToDetails}>
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{
                        uri: image,
                    }}
                />
                <Text style={styles.title}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        backgroundColor: "#F8F5F5",
        paddingTop: 30,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
    },
    title: {
        color: "black",
        fontSize: 30,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 20
    },
    image: {
        width: 200,
        height: 200,
        marginLeft: "auto",
        marginRight: 'auto'
    }
});