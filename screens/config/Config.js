import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Config() {
  return (
    <View style={styles.container}>
      <Text>Configuração</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f7ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});