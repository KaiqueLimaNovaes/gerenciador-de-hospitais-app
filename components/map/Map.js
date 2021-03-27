import React, {Component} from 'react';
import MapView from 'react-native-maps';

import { StyleSheet, View } from 'react-native';

import Directions from '../directions/Directions.js'

export default class Mapa extends Component {
    state = {
        region: {
            latitude: -23.4253133,
            longitude: -46.5154733,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
        },
        destination: null,
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

    
    async componentDidMount(){

        this.setState({
            destination: {
                latitude: this.props.children[0],
                longitude: this.props.children[1],
            },
        })
    }

    render(){
        const {region, destination} = this.state;

        //console.warn(region);
        //console.warn(destination);

        return(
            <View style={styles.contMapa}>
                <MapView
                    style={styles.mapa}
                    region={region}
                    showsUserLocation={true}
                    loadingEnabled
                    ref = {el => this.mapView = el}
                >
                    {destination && (
                        <Directions
                            origin = {region}
                            destination = {destination}
                            onReady = {result => {
                                this.mapView.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: 50,
                                        left: 50,
                                        top: 50,
                                        bottom: 50,
                                    }
                                });
                            }}
                        />
                    )}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contMapa: {
      width: '100%',
      height: '60%',
    },
    mapa: {
        flex: 1,
    },
})