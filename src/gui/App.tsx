import React, { PureComponent } from "react";
import { Restaurant } from "../business/models/restaurant";
import RestaurantCardList from "./restaurant-card-list";
import { restaurantRepository } from "../business/restaurant-repository";

interface State {
  restaurants: Restaurant[];
}

class App extends PureComponent<{}, State> {
  readonly state: State = { restaurants: [] };

  componentDidMount() {
    restaurantRepository
      .getRestaurants()
      .then(restaurants => this.setState({ restaurants }));
  }

  render() {
    if (this.state.restaurants.length) {
      return (
        <div>
          <RestaurantCardList restaurants={this.state.restaurants} />
        </div>
      );
    }
    return <span>Loading restaurants...</span>;
  }
}

export default App;