import * as React from "react";
import "./restaurant-card.css";
import { Restaurant } from "./models/restaurant";
import Card from "react-bootstrap/es/Card";
import Collapse from "react-bootstrap/es/Collapse";
import RestaurantDetails from "./restaurant-details";

interface Props {
  restaurant: Restaurant;
}
interface State {
  expanded: boolean;
}

class RestaurantCard extends React.PureComponent<Props, State> {
  readonly state: State = { expanded: false };

  render() {
    return (
      <div className="cell">
        <Card
          className="bg-dark text-white img-gradient"
          onClick={() => this.setState({ expanded: !this.state.expanded })}
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
        <Collapse in={this.state.expanded}>
          <div id="collapse-details">
            <RestaurantDetails restaurant={this.props.restaurant} />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default RestaurantCard;
