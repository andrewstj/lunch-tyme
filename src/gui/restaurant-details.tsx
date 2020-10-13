import * as React from "react";
import Card from "react-bootstrap/Card";
import { Restaurant } from "../business/models/restaurant";
import Map from "./map";
import "./restaurant-card.css";
import {
  CONTAINER_ITEM,
  DETAIL_HEADER,
  DETAIL_INFORMATION,
  LARGE_VERTICAL_BREAK
} from "./styles";

interface Props {
  restaurant: Restaurant;
}

const RestaurantDetails: React.FunctionComponent<Props> = (props: Props) => {
  const renderHeader = () => {
    return (
      <div style={DETAIL_HEADER}>
        <Card.Title>{props.restaurant.name}</Card.Title>
        <Card.Subtitle>{props.restaurant.category}</Card.Subtitle>
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div style={DETAIL_INFORMATION}>
        <Card.Body>
          <div>{props.restaurant.location.address}</div>
          <div>
            {props.restaurant.location.city}, {props.restaurant.location.state}{" "}
            {props.restaurant.location.postalCode}
          </div>
          {renderContactInformation()}
        </Card.Body>
      </div>
    );
  };

  const renderContactInformation = () => {
    if (props.restaurant.contact) {
      return [
        <div style={LARGE_VERTICAL_BREAK}>
          {props.restaurant.contact.formattedPhone}
        </div>,
        <div style={LARGE_VERTICAL_BREAK}>{renderTwitter()}</div>
      ];
    }
  };

  const renderTwitter = () => {
    if (props.restaurant.contact!.twitter) {
      return <span>@{props.restaurant.contact!.twitter}</span>;
    }
  };

  return (
    <Card className="bg-dark text-white " style={CONTAINER_ITEM}>
      <Map
        lat={props.restaurant.location.lat}
        lng={props.restaurant.location.lng}
      />
      {renderHeader()}
      {renderDetails()}
    </Card>
  );
};
export default RestaurantDetails;
