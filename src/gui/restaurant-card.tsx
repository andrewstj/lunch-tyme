import * as React from "react";
import "./restaurant-card.css";
import { Restaurant } from "../business/models/restaurant";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import RestaurantDetails from "./restaurant-details";

interface Props {
  restaurant: Restaurant;
  expanded: boolean;
  toggleCard: (restaurantName: string) => void;
}

const RestaurantCard: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="cell">
      <Card
        className="bg-dark text-white img-gradient"
        onClick={() => props.toggleCard(props.restaurant.name)}
        aria-controls="collapse-details"
      >
        <Card.Img src={props.restaurant.backgroundImageURL} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.restaurant.name}</Card.Title>
          <Card.Subtitle>{props.restaurant.category}</Card.Subtitle>
        </Card.ImgOverlay>
      </Card>
      <Collapse in={props.expanded}>
        <div id="collapse-details">
          <RestaurantDetails restaurant={props.restaurant} />
        </div>
      </Collapse>
    </div>
  );
};
export default RestaurantCard;
