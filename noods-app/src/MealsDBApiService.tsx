import * as request from "request";
import { Recipe } from "./ModelClass/Recipe";

const OPTIONS: any = {
  json: true
};

function INGREDIENTSLIST(recipe: any) {
  let ingredientsArray: any[] = [];
  let currentIngredient = "strIngredient1";
  let currentMeasure = "strMeasure1";
  let index = 1;
  while (true) {
    if (!recipe[currentIngredient] || index === 20) {
      break;
    } else {
      ingredientsArray = ingredientsArray.concat({
        name: recipe[currentIngredient],
        measure: recipe[currentMeasure]
      });
      index++;
      currentIngredient = currentIngredient.slice(0, -1) + index;
      currentMeasure = currentMeasure.slice(0, -1) + index;
    }
  }
  return ingredientsArray;
}

export class MealsDBApiService {
  getSearchRequest(mealName: string, cb:(recipe:Recipe) => any) {
    request.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName,
      OPTIONS,
      (error: any, response: any, body: any) => {
        console.log("This is the response: " + response);
        console.log("This is the body: " + body);
        console.log("This is the error: " + error);
      }
    );
  }

  getRandomRequest(cb: (recipe: Recipe) => any) {
    request.get(
      "https://www.themealdb.com/api/json/v1/1/random.php",
      OPTIONS,
      (error: any, response: any, body: any) => {
        let meals: any[] = body.meals[0];
        let ingredientsArray: any[] = INGREDIENTSLIST(meals);
        let recipe = new Recipe(
          meals,
          ingredientsArray,
          ingredientsArray.length
        );
        cb(recipe);
      }
    );
  }
}
