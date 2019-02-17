import * as React from "react";
import "./restaurant-card.css";
import { Restaurant } from "../business/models/restaurant";
import Card from "react-bootstrap/es/Card";
import Collapse from "react-bootstrap/es/Collapse";
import RestaurantDetails from "./restaurant-details";

interface Props {
  restaurant: Restaurant;
  expanded: boolean;
  toggleCard: (restaurantName: string) => void;
}

class RestaurantCard extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className="cell">
        <Card
          className="bg-dark text-white img-gradient"
          onClick={() => this.props.toggleCard(this.props.restaurant.name)}
          aria-controls="collapse-details"
        >
          <Card.Img
            src={this.props.restaurant.backgroundImageURL}
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>{this.props.restaurant.name}</Card.Title>
            <Card.Subtitle>{this.props.restaurant.category}</Card.Subtitle>
          </Card.ImgOverlay>
        </Card>
        <Collapse in={this.props.expanded}>
          <div id="collapse-details">
            <RestaurantDetails restaurant={this.props.restaurant} />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default RestaurantCard;
