import * as React from "react";

import "./restaurant-card.css";
import { Restaurant } from "../business/models/restaurant";
import RestaurantCard from "./restaurant-card";

interface Props {
  restaurants: Restaurant[];
}

interface State {
  expandedRestaurantName: string | null;
}

class RestaurantCardList extends React.PureComponent<Props, State> {
  readonly state: State = { expandedRestaurantName: null };

  render() {
    return this.props.restaurants.map(restaurant => (
      <RestaurantCard
        restaurant={restaurant}
        key={restaurant.name}
        expanded={this.state.expandedRestaurantName === restaurant.name}
        toggleCard={this.toggleCard.bind(this)}
      />
    ));
  }

  toggleCard(restaurantName: string): void {
    const isCurrentlySelected: boolean =
      this.state.expandedRestaurantName === restaurantName;
    this.setState({
      expandedRestaurantName: isCurrentlySelected ? null : restaurantName
    });
  }
}

export default RestaurantCardList;
