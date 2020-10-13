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

const Map: React.FunctionComponent<Props> = (props: Props) => {
  return (
      <div style={MAP}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDzrEUNGDAnNhqN4hSAZlIcVTEHDGql4-4"
          }}
          defaultCenter={{
            lat: props.lat,
            lng: props.lng
          }}
          defaultZoom={DEFAULT_ZOOM}
        >
          <MapItem />
        </GoogleMapReact>
      </div>
    );
}
export default Map;
