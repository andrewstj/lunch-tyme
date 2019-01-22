import * as React from "react";

import "./restaurant-card.css";
import { Restaurant } from "../business/models/restaurant";
import RestaurantCard from "./restaurant-card";

interface Props {
  restaurants: Restaurant[];
}

class RestaurantCardList extends React.Component<Props, {}> {
  render() {
    return this.props.restaurants.map(restaurant => (
      <RestaurantCard restaurant={restaurant} key={restaurant.name} />
    ));
  }
}

export default RestaurantCardList;
