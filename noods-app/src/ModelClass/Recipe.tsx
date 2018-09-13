
export class Recipe {
    mealName:string
    thumbnail:string
    instructions: string
    ingredients: {[key:string]:string} 

    constructor(dbRespone: any, ingredientsMap:any) {
        this.mealName = dbRespone.strMeal;
        this.thumbnail = dbRespone.strMealThumb;
        this.instructions = dbRespone.strInstructions;
        this.ingredients = ingredientsMap;
    }
}