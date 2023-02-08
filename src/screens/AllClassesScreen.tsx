import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, FlatList, ScrollView, Image, View } from "react-native";
import { CardClasse } from "../components/CardClasse";
import { useDofus } from "../hooks/useDofusApi";


export const AllClassesScreen = () => {

    const { data, isError, isLoading } = useDofus();

    if (isError) {
        return (
            <Text>Error !</Text>
        )
    }
    if (isLoading) {
        return (
            <Text>Loading ...</Text>
        )
    }

    return (
        <SafeAreaView style={styles.safeContainer}>
            <FlatList
                data={data}
                renderItem={({ item }) => <CardClasse name={item.name} description={item.description} image={item.maleImg} roles={item.roles} />}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    item: {
        marginTop: 20,
        marginLeft: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
});