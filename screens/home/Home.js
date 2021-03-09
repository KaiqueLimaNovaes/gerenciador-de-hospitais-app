import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import data from '../../config/data/especialidades.js';

export default function Home() {

  return (
    <View style={styles.container}>

      <Text style={styles.textoTitulo}>Especialidade</Text>
      
      <FlatList
        data = {data}
        keyExtractor = {item => item.key}
        horizontal
        showsHorizontalScrollIndicator = {false}
        decelerationRate = 'fast'
        renderItem = {({item}) => {
          return<TouchableOpacity onPress={() => {navigation.push('EspecialidadeDetail', {item})}} >
            <LinearGradient colors={['#B1E5FA', '#70d5fc']} start={[0.1,0.2]} end={[0.6,0.6]} style={styles.itemContainer}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <Text style={styles.textoEspecialidade}>{item.especialidade}</Text>
            </LinearGradient>
          </TouchableOpacity> 
        }}
        style={styles.flatL}
      />

      <Text style={styles.textoTitulo}>Hospitais</Text>
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
      marginTop: 20,
      marginBottom: 20,
      fontSize: 35,
      fontWeight: 'bold',
    },
    flatL: {
      flexGrow: 0,
    }
});