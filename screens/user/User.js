import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function User() {
  return (
    <View style={styles.container}>
      <Text>Usuário</Text>
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