import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useClasseId } from "../hooks/useDofusClassIdApi";
import { getRandomNumber } from "../utils/getRandomNumber";

export const GenerateClasseScreen = () => {

    const [number, setNumber] = useState(0);

    const { data, isError, isLoading, refetch } = useClasseId(number);

    function handlePressRandom() {
        const randomnumber = getRandomNumber();
        setNumber(randomnumber);
    }

    useEffect(() => {
        refetch();
    }, [number]);

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
        <View>
            {number !== 0 ? (
                <Image
                    style={styles.image}
                    source={{ uri: data.maleImg }}
                />
            ) : (
                <Image
                    style={styles.image}
                    source={require('../../assets/pngegg.png')}
                />
            )}
            <Text style={styles.title}>{data.name}</Text>
            <Button
                style={styles.button}
                onPress={handlePressRandom}
            ><Text style={styles.text}>Génère ta classe aléatoirement</Text></Button>
        </View>
    )

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2193C1",
        color: 'white',
        margin: 30,
        textAlign: 'center'
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 50,
        marginBottom: 40,
        marginLeft: "auto",
        marginRight: 'auto'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20
    },
    roles: {
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-around",
    },
    role: {
        textAlign: "center"
    },
    h2: {
        textAlign: "center",
        fontSize: 22,
        marginTop: 30,
    },
    text: {
        color: 'white',
        fontSize: 18
    }
});


