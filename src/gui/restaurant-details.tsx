import * as React from "react";
import "./restaurant-card.css";
import { Restaurant } from "../business/models/restaurant";
import Card from "react-bootstrap/es/Card";
import Map from "./map";
import { CONTAINER_ITEM, DETAIL_HEADER, DETAIL_INFORMATION } from "./styles";

interface Props {
  restaurant: Restaurant;
}

class RestaurantDetails extends React.PureComponent<Props> {
  render() {
    return (
      <Card className="bg-dark text-white " style={CONTAINER_ITEM}>
        <Map
          lat={this.props.restaurant.location.lat}
          lng={this.props.restaurant.location.lng}
        />
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
}
export default RestaurantDetails;
