import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';

export default function LocationScreen() {
    const solicitarAceite = () => {
        Alert.alert("Solicitação de aceite enviada!");
    }

    const discar = () => {
        Alert.alert("Discando...");
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/MAPA.jpeg')} // Substitua 'mapa.png' pelo caminho da sua imagem do mapa
                style={styles.map}
            />
            <View style={styles.locationInfo}>
                <Text style={styles.infoText}>Localização</Text>
                <Text style={styles.addressText}>Rua dos Economistas, 157 - Alípio de Melo</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={solicitarAceite}>
                <Text style={styles.buttonText}>Solicitação de Aceite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={discar}>
                <Text style={styles.buttonText}>Discar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    map: {
        width: '80%',
        maxWidth: 600,
        height: 300,
        marginBottom: 20,
    },
    locationInfo: {
        marginBottom: 20,
    },
    infoText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addressText: {
        fontSize: 16,
    },
    button: {
        padding: 10,
        backgroundColor: '#e3102c',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
