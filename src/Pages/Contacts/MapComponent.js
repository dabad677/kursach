import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width:'40%',
    margin: '20px 0px 20px 0px'
};
class MapComponent extends Component{
    render() {
        return(
            <Map
                        google={this.props.google}
                        zoom={16}
                        style={mapStyles}
                        initialCenter={{ lat: 50.430131, lng: 30.542889}}
                        streetViewControl={false}
                        mapTypeControl={false}
                        fullscreenControl={false}
            ><
                Marker position={{ lat: 50.430131, lng: 30.542889}} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA-A9Z8_DC4ni3pYvtqKFDo9KFQoH2J0Ro',

})(MapComponent);

