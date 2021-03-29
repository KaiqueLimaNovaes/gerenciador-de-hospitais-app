import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import * as Screens from "./screens";

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export function ScreenNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Hospitais" component={Screens.Home} />
        <Stack.Screen name="Detalhes Hospital" component={Screens.HospitalDetails} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Hospitais"
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
          component={ScreenNav}
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