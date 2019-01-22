import * as React from "react";
import "./restaurant-card.css";
import { Restaurant } from "../business/models/restaurant";
import Card from "react-bootstrap/es/Card";
import Map from "./map";
import {
  CONTAINER_ITEM,
  DETAIL_HEADER,
  DETAIL_INFORMATION,
  LARGE_VERTICAL_BREAK
} from "./styles";

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
          <div>{this.props.restaurant.location.address}</div>
          <div>
            {this.props.restaurant.location.city},{" "}
            {this.props.restaurant.location.state}{" "}
            {this.props.restaurant.location.postalCode}
          </div>
          {this.renderContactInformation()}
        </Card.Body>
      </div>
    );
  }

  private renderContactInformation() {
    if (this.props.restaurant.contact) {
      return [
        <div style={LARGE_VERTICAL_BREAK}>
          {this.props.restaurant.contact.formattedPhone}
        </div>,
        <div style={LARGE_VERTICAL_BREAK}>{this.renderTwitter()}</div>
      ];
    }
  }

  private renderTwitter() {
    if (this.props.restaurant.contact!.twitter) {
      return <span>@{this.props.restaurant.contact!.twitter}</span>;
    }
  }
}
export default RestaurantDetails;
