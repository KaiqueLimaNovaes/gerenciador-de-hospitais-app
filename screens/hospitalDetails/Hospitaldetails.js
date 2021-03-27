import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function HospitalDetails(item) {

    return(
        <View>
            <Text style={styles.tituloHospital}>{item.nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tituloHospital: {
      fontSize: 18,
      fontWeight: 'bold',
    },
});