import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';


export const ClasseDetailScreen = ({ route, navigation }: any) => {

    const { name, image, description, roles } = route.params;

    return (
        <ScrollView>
            <Image
                style={styles.image}
                source={{ uri: image[0] }}
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.h2}>Rôles</Text>
            <View style={styles.roles}>
                {roles[0].map(role => (
                    <View style={styles.block}>
                        <Text style={styles.role}>{role}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: 'auto'
    },
    title: {
        color: "black",
        fontSize: 30,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
    description: {
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center",
        fontStyle: 'italic'
    },
    roles: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
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
    block: {
        width: 100
    }
});
