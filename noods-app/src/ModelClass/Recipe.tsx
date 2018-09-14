export class Recipe {
  mealName: string;
  thumbnail: string;
  instructions: string;
  index: number;
  ingredients: any[];

  constructor(dbRespone: any, ingredientsArray: any, num: any) {
    this.mealName = dbRespone.strMeal;
    this.thumbnail = dbRespone.strMealThumb;
    this.instructions = dbRespone.strInstructions;
    this.ingredients = ingredientsArray;
    this.index = num;
  }
}
