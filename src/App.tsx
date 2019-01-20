import React, { PureComponent } from "react";
import "./App.css";
import { Restaurant } from "./models/restaurant";
import RestaurantCardList from "./restaurant-card-list";

interface State {
  restaurants: Restaurant[];
}

class App extends PureComponent<{}, State> {
  readonly state: State = { restaurants: [] };

  componentDidMount() {
    fetch(
      "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ restaurants: data.restaurants }));
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
