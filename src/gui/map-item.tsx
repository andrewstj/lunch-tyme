import * as React from "react";
import "./restaurant-card.css";
import { MAP_POINT_STYLE } from "./styles";

interface Props {
  lat: number;
  lng: number;
}

class MapItem extends React.PureComponent<Props> {
  render() {
    return <div style={MAP_POINT_STYLE} />;
  }
}
export default MapItem;
