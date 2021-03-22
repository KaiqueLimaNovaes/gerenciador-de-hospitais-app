import React, {Component} from 'react';
import MapView from 'react-native-maps';

import { StyleSheet, View } from 'react-native';

export default class Mapa extends Component {
    state = {
        region: null,
    };

    async componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            ({ coords: {latitude, longitude} }) => {
                this.setState({ region: {latitude, longitude, latitudeDelta: 0.0143, longitudeDelta: 0.0134} })
            },
            () => {},
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        )
    }

    render(){
        const {region} = this.state;

        return(
            <View style={styles.contMapa}>
                <MapView
                    style={styles.mapa}
                    region={region}
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