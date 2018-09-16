export class Recipe {
  mealName: string;
  thumbnail: string;
  instructions: string;
  index: number;
  ingredients: any[];
  error: boolean;

  constructor(
    error: boolean,
    ingredientsArray?: any,
    dbRespone?: any,
    num?: any
  ) {
    this.error = error;
    if (!error) {
      this.mealName = dbRespone.strMeal;
      this.thumbnail = dbRespone.strMealThumb;
      this.instructions = dbRespone.strInstructions;
      this.ingredients = ingredientsArray;
      this.index = num;
    }
  }
}
