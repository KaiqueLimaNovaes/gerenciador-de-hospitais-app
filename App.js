import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import * as Screens from "./screens";

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  if (state.isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#70d5fc"
        inactiveColor="black"
        barStyle={{ backgroundColor: '#FFFFFF' }}
      >
        <Tab.Screen 
          name="Usuário"
          component={Screens.User}
          options={{tabBarIcon:({ color }) => (<Icon name="user" color={color} size={27} />)}}
        />

        <Tab.Screen 
          name="Hospitais"
          component={Screens.Home}
          options={{tabBarIcon:({ color }) => (<Icon name="user-md" color={color} size={27} />)}}
        />

        <Tab.Screen 
          name="Config"
          component={Screens.Config}
          options={{tabBarIcon:({ color }) => (<Icon name="cog" color={color} size={27} />)}}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
