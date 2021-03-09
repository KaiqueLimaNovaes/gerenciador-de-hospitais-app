import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import data from '../../config/data/especialidades.js';

import Grande from '../../assets/images/hospitalgrande.png'

export default function Home() {

  return (
    <View style={styles.container}>

      <Text style={styles.textoTitulo}>Especialidade</Text>
      
      <View>
        <FlatList
          data = {data}
          keyExtractor = {item => item.key}
          horizontal
          showsHorizontalScrollIndicator = {false}
          decelerationRate = 'fast'
          renderItem = {({item}) => {
            return<TouchableOpacity onPress={() => {}} >
              <LinearGradient colors={['#B1E5FA', '#70d5fc']} start={[0.1,0.2]} end={[0.6,0.6]} style={styles.itemContainer}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <Text id="esp" style={styles.textoEspecialidade}>{item.especialidade}</Text>
              </LinearGradient>
            </TouchableOpacity> 
          }}
          style={styles.flatL}
        />
      </View>

      <Text style={styles.textoTitulo}>Hospitais</Text>

      <FlatList style={styles.listaHospitais}
        data = {data}
        keyExtractor = {item => item.key}
        decelerationRate = 'fast'
        renderItem = {({item}) => {
          return<TouchableOpacity onPress={() => {}} style={styles.cardHospitais}>
            <View style={styles.timeIndicator}>
              <Image source={Grande} style={styles.imageH}/>
            </View>
            <View style={styles.textoCardH}>
              <Text id="esp" style={styles.textoEspecialidade}>{item.especialidade}</Text>
              <Text style={styles.textoMin}>5km de distancia</Text>
            </View>
            <View style={styles.timeIndicator}>
              <Text style={styles.textoTime}>45</Text>
              <Text style={styles.textoMin}>min</Text>
            </View>
          </TouchableOpacity> 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f7',
    },
    itemContainer: {
      width: 220,
      height: 220,
      borderRadius: 20,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemImage: {
      width: 120,
      height: 150,
      resizeMode: 'cover',
    },
    textoEspecialidade: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    textoTitulo: {
      marginLeft: 10,
      marginTop: 20,
      marginBottom: 20,
      fontSize: 35,
      fontWeight: 'bold',
    },
    flatL: {
      flexGrow: 0,
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