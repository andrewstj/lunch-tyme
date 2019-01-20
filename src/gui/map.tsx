import * as React from "react";
import "./restaurant-card.css";
import GoogleMapReact from "google-map-react";
import MapItem from "./map-item";
import { MAP } from "./styles";

interface Props {
  lat: number;
  lng: number;
}

const DEFAULT_ZOOM: number = 15;

class Map extends React.PureComponent<Props> {
  render() {
    return (
      <div style={MAP}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDzrEUNGDAnNhqN4hSAZlIcVTEHDGql4-4"
          }}
          defaultCenter={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
          defaultZoom={DEFAULT_ZOOM}
        >
          <MapItem lat={this.props.lat} lng={this.props.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
