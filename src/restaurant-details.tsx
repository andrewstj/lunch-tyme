import * as React from "react";
import "./restaurant-card.css";
import { Restaurant } from "./models/restaurant";
import { CSSProperties } from "react";
import Card from "react-bootstrap/es/Card";
import GoogleMapReact from "google-map-react";
import MapItem from "./map-item";

interface Props {
  restaurant: Restaurant;
}

const CONTAINER_ITEM: CSSProperties = {
  width: "100%"
};

const DETAIL_HEADER: CSSProperties = {
  ...CONTAINER_ITEM,
  backgroundColor: "#34B379",
  padding: ".75rem"
};

const DETAIL_INFORMATION: CSSProperties = {
  ...CONTAINER_ITEM,
  backgroundColor: "#FFFFFF",
  color: "#000000",
  height: "180px"
};
const DEFAULT_ZOOM: number = 15;

class RestaurantDetails extends React.PureComponent<Props> {
  render() {
    return (
      <Card className="bg-dark text-white " style={CONTAINER_ITEM}>
        {this.renderMap()}
        {this.renderHeader()}
        {this.renderDetails()}
      </Card>
    );
  }

  private renderHeader() {
    return (
      <div style={DETAIL_HEADER}>
        <Card.Title>{this.props.restaurant.name}</Card.Title>
        <Card.Subtitle>{this.props.restaurant.category}</Card.Subtitle>
      </div>
    );
  }

  private renderDetails() {
    return (
      <div style={DETAIL_INFORMATION}>
        <Card.Body>
          {this.props.restaurant.location.address} <br />
          {this.props.restaurant.location.city},{" "}
          {this.props.restaurant.location.state}{" "}
          {this.props.restaurant.location.postalCode} <br />
          <br />
          {this.renderContactInformation()}
        </Card.Body>
      </div>
    );
  }

  private renderContactInformation() {
    if (this.props.restaurant.contact) {
      return (
        <div>
          {this.props.restaurant.contact.formattedPhone}
          <br />
          <br />
          {this.renderTwitter()}
        </div>
      );
    }
  }

  private renderTwitter() {
    if (this.props.restaurant.contact!.twitter) {
      return <span>@{this.props.restaurant.contact!.twitter}</span>;
    }
  }

  private renderMap() {
    return (
      <div style={{ height: "180px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDzrEUNGDAnNhqN4hSAZlIcVTEHDGql4-4"
          }}
          defaultCenter={{
            lat: this.props.restaurant.location.lat,
            lng: this.props.restaurant.location.lng
          }}
          defaultZoom={DEFAULT_ZOOM}
        >
          <MapItem
            lat={this.props.restaurant.location.lat}
            lng={this.props.restaurant.location.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default RestaurantDetails;
