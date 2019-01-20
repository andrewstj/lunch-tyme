import * as React from "react";

import "./restaurant-card.css";
import { Restaurant } from "./models/restaurant";
import RestaurantCard from "./restaurant-card";

interface Props {
  restaurants: Restaurant[];
}

class RestaurantCardList extends React.Component<Props, {}> {
  render() {
    return (
      <div className="container">
        <div className="grid">
          {this.props.restaurants.map(restaurant => (
            <RestaurantCard restaurant={restaurant} key={restaurant.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default RestaurantCardList;
