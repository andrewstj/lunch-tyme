import { Restaurant } from "./models/restaurant";

export const restaurantRepository = new class {
  getRestaurants(): PromiseLike<Restaurant[]> {
    return fetch(
      "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json"
    )
      .then(response => response.json())
      .then(data => data.restaurants);
  }
}();
