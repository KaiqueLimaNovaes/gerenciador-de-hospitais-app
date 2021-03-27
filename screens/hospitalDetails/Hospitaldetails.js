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
            <Text style={styles.tituloHospital}>{item.nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f7',
    },
    tituloHospital: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});