import * as React from "react";
import "./restaurant-card.css";
import { MAP_POINT } from "./styles";

interface Props {
  lat: number;
  lng: number;
}

class MapItem extends React.PureComponent<Props> {
  render() {
    return <div style={MAP_POINT} />;
  }
}
export default MapItem;
