import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Mapa from '../../components/map/Map';

export default function HospitalDetails({route}) {

    const {item} = route.params;

    return(
        <View>
            <Text style={styles.tituloHospital}>{item.nome}</Text>
            <Mapa />
        </View>
    )
}

const styles = StyleSheet.create({
    tituloHospital: {
      fontSize: 18,
      fontWeight: 'bold',
    },
});