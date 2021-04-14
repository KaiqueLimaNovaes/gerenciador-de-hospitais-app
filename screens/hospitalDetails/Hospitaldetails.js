import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Mapa from '../../components/map/Map';

export default function HospitalDetails({route}) {

    const {item} = route.params;

    const lat = item.latitude;
    const lng = item.longitude;

    return(
        <View style={styles.container}>
            <Mapa>{[item.latitude, item.longitude]}</Mapa>
            
            <View style={styles.containerInfo}>
                <View style={styles.crono}>
                    <TouchableOpacity style={styles.botaoCrono} onPress={() => {}}>
                        <Text style={styles.tituloCrono}>Entrada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoCrono} onPress={() => {}}>
                        <Text style={styles.tituloCrono}>00:00:00</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.tituloHospital}>{item.nome}</Text>

                <Text style={styles.textHospitalDeatails}>Tempo medio de atendimento:</Text>

                <View style={styles.crono}>
                    <Text style={styles.tempoHospitalDeatails}>45 min</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#70d5fc',
    },
    tituloHospital: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    tituloCrono: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    containerInfo: {
        flex: 1,
        backgroundColor: '#f6f6f7',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    crono: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    botaoCrono: {
        width: 160,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#70d5fc',
        marginBottom: 15,
    },
    textCrono: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 15,
    },
    textHospitalDeatails: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
    },
    tempoHospitalDeatails: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15,
    },
});