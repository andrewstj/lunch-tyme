import * as React from "react";
import "./restaurant-card.css";
import { CSSProperties } from "react";

interface Props {
  lat: number;
  lng: number;
}

const RADIUS = 10;

const mapPointStyle: CSSProperties = {
  position: "absolute",
  width: RADIUS,
  height: RADIUS,
  left: -RADIUS / 2,
  top: -RADIUS / 2,

  border: "1px solid white",
  borderRadius: RADIUS,
  backgroundColor: "#0000b5",
  padding: 4
};

class MapItem extends React.PureComponent<Props> {
  render() {
    return <div style={mapPointStyle} />;
  }
}
export default MapItem;
