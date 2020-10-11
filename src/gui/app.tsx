import React, { PureComponent } from "react";
import { Restaurant } from "../business/models/restaurant";
import RestaurantCardList from "./restaurant-card-list";
import { restaurantRepository } from "../business/restaurant-repository";
import Navbar from "react-bootstrap/Navbar";

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
        <div className="container">
          <Navbar sticky="top">Lunch Tyme</Navbar>
          <div className="grid">
            <RestaurantCardList restaurants={this.state.restaurants} />
          </div>
        </div>
      );
    }
    return <span>Loading restaurants...</span>;
  }
}

export default App;
