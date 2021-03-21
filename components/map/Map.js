import React, {Component} from 'react';
import MapView from 'react-native-maps';

import { StyleSheet, View } from 'react-native';

export default class Mapa extends Component {

    render(){
        return(
            <View style={styles.contMapa}>
                <MapView
                    style={styles.mapa}
                    region={{
                        latitude: -23.4253,
                        longitude: -46.5155,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    }}
                    showsUserLocation={true}
                    loadingEnabled
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contMapa: {
      width: '100%',
      height: 500,
    },
    mapa: {
        flex: 1,
    },
})