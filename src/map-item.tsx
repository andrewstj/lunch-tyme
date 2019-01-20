import * as React from "react";
import "./restaurant-card.css";
import { CSSProperties } from "react";

interface Props {
  lat: number;
  lng: number;
}

const K_WIDTH = 10;
const K_HEIGHT = 10;

const mapPointStyle: CSSProperties = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "1px solid white",
  borderRadius: K_HEIGHT,
  backgroundColor: "#0000b5",
  padding: 4
};

class MapItem extends React.PureComponent<Props> {
  render() {
    return <div style={mapPointStyle} />;
  }
}
export default MapItem;
