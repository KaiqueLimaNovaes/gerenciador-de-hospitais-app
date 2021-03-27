import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

export default function Directions({ destination, origin, onReady }) {

    return(
        <MapViewDirections
            destination = {destination}
            origin = {origin}
            onReady = {onReady}
            apikey = 'AIzaSyA7-sqroMS9DYp4_UfIHsTqxHYNYi-Qh2o'
            strokeWidth = {5}
            strokeColor = '#70d5fc'
        />
    )
}