import React, { Component, setState, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from "axios";

export default function ListaHospitais(props) {
    const [hospitais, setHospitais] = useState([]);
    
    //- Conexão com a api -//
    useEffect(() => {
        axios.get("http://192.168.0.105:3000/hospitais").then((response) => {
        setHospitais(response.data.hospitais);
        }).catch((error)=>{
            console.log("Api call error");
            alert(error.message);
         });
    }, []);
    //------------------------------------------//

    //- Constante que chama as imagens do porte dos hospitais -//
    const imageP = {
      porte: {
        Grande: require('../../assets/images/Grande.png'),
        Medio: require('../../assets/images/Medio.png'),
        Pequeno: require('../../assets/images/Pequeno.png'),
      }
    }
    //------------------------------------------//
    
    //- Calculo da distancia entre as coordenadas -//
    const latU = -23.4253133
    const longU = -46.5154733
    let latH = -23.53250
    let longH = -46.77667

    // Tive que passar a parada toda para dentro do if

    let DLA = (((latU * (-1)) - (latH * (-1))) * 111.12)
    let DLO = (((longU * (-1)) - (longH * (-1))) * 111.12)

    // Teorema de Pitagoras [ dist² = DLA² + DLO² ]

    let dist = Math.ceil(Math.sqrt((Math.abs(DLA) ** 2) + (Math.abs(DLO) ** 2)))
    //------------------------------------------//

    return(
        <FlatList style={styles.listaHospitais}
            data = {hospitais}
            keyExtractor = {(item) => item.id}
            decelerationRate = 'fast'
            renderItem = {({item}) => {
              if(Math.ceil(Math.sqrt((Math.abs((((latU * (-1)) - (item.latitude * (-1))) * 111.12)) ** 2) + (Math.abs((((longU * (-1)) - (item.longitude * (-1))) * 111.12)) ** 2))) < 35){
                return(
                  <TouchableOpacity onPress={() => {
                    props.children.navigation.navigate('Detalhes Hospital', { item })
                  }} style={styles.cardHospitais}>
    
                      <View style={styles.timeIndicator}>
                        <Image source={imageP.porte[item.porte]} style={styles.imageH}/>
                      </View>
    
                      <View style={styles.textoCardH}>
                        <View style={styles.nomeField}>
                          <Text id="esp" numberOfLines={2} style={styles.textoHospitalNome}>{item.nome}</Text>
                        </View>
                        
                        <View style={styles.distField}>
                          <Text style={styles.textoMin}>{Math.ceil(Math.sqrt((Math.abs((((latU * (-1)) - (item.latitude * (-1))) * 111.12)) ** 2) + (Math.abs((((longU * (-1)) - (item.longitude * (-1))) * 111.12)) ** 2)))}km de distância</Text>
                        </View>
                      </View>
    
                      <View style={styles.timeIndicator}>
                        <Text style={styles.textoTime}>45</Text>
                        <Text style={styles.textoMin}>min</Text>
                      </View>
    
                  </TouchableOpacity> 
                )
              }
            }}
        />
    )
    
}

const styles = StyleSheet.create({
    textoHospitalNome: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    listaHospitais: {
      width: '100%',
    },
    cardHospitais:{
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 20,
      width: '95%',
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
      width: 150,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    distField: {
      width: 150,
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