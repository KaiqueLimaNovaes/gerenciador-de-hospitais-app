import React, { Component, setState, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from "axios";

import Grande from '../../assets/images/hospitalgrande.png';
import Medio from '../../assets/images/hospitalmedio.png';
import Pequeno from '../../assets/images/hospitalpequeno.png';

import dato from '../../config/data/especialidades.js';

export default function ListaHospitais() {
    const [hospitais, setHospitais] = useState([]);
    
    useEffect(() => {
        axios.get("http://192.168.0.38:3000/hospitais").then((response) => {
        setHospitais(response.data.hospitais);
        }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
         });
    }, []);

    //console.warn(hospitais);

    return(
        <FlatList style={styles.listaHospitais}
            data = {hospitais}
            keyExtractor = {(item) => item.id}
            decelerationRate = 'fast'
            renderItem = {({item}) => {
            return<TouchableOpacity onPress={() => {}} style={styles.cardHospitais}>
                <View style={styles.timeIndicator}>
                  <Image source={item.porte} style={styles.imageH}/>
                </View>
                <View style={styles.textoCardH}>
                  <View style={styles.nomeField}>
                    <Text id="esp" numberOfLines={2} style={styles.textoEspecialidade}>{item.nome}</Text>
                  </View>
                  <View style={styles.distField}>
                    <Text style={styles.textoMin}>5km de distancia</Text>
                  </View>
                </View>
                <View style={styles.timeIndicator}>
                  <Text style={styles.textoTime}>45</Text>
                  <Text style={styles.textoMin}>min</Text>
                </View>
            </TouchableOpacity> 
            }}
        />
    )
    
}

const styles = StyleSheet.create({
    textoEspecialidade: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    listaHospitais: {
      width: '100%',
    },
    cardHospitais:{
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 20,
      width: '90%',
      height: 90,
      borderRadius: 20,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      shadowColor: "#000",
      shadowOffset: {width: 0,height: 4,},
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 9,
    },
    nomeField: {
      width: 180,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    distField: {
      width: 180,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timeIndicator: {
      width: 75,
      height: 75,
      borderRadius: 20,
      backgroundColor: '#f6f6f7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoCardH: {
      flexDirection: 'column',
    },
    textoTime: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    imageH: {
      width: 50,
      height: 50,
    },
});