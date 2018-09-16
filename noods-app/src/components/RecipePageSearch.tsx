import { name } from "./../App";
import { MealsDBApiService } from "./../MealsDBApiService";
import { Recipe } from "../ModelClass/Recipe";
import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";

interface IState {
  userInput: string;
  randomName: string;
  randomThumbnail: string;
  randomInstructions: string;
  randomIngredients: any[];
  randomIndex: any;
  randomingredientList: any;
  noSearch: boolean;
}

let ingredientList: any;

class SearchRecipePage extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userInput: name,
      randomName: "",
      randomThumbnail: "",
      randomInstructions: "",
      randomIngredients: [],
      randomIndex: 0,
      randomingredientList: null,
      noSearch: false
    };
  }

  componentDidMount() {
    let apiCall = new MealsDBApiService();
    apiCall.getSearchRequest(this.state.userInput, (recipe: Recipe) => {
      console.log(recipe);
      if (recipe.error) {
        this.setState({ noSearch: true });
      } else {
        this.setState({
          randomName: recipe.mealName,
          randomIngredients: recipe.ingredients,
          randomIndex: recipe.index,
          randomThumbnail: recipe.thumbnail,
          randomInstructions: recipe.instructions
        });
      }
      ingredientList = this.state.randomIngredients.map((ingredient, index) => {
        return (
          <li key={index}>
            {ingredient.name}: {ingredient.measure}
          </li>
        );
      });
      this.setState({ randomingredientList: ingredientList });
    });
  }

  render() {
    if (this.state.noSearch) {
      return (
        <div>
          <h1>Sorry, no search results for {this.state.userInput}</h1>
        </div>
      );
    } else if (
      this.state.randomName === "" ||
      this.state.randomThumbnail === "" ||
      this.state.randomingredientList === null
    ) {
      return (
        <div className="loader">
          <CircularProgress style={{ color: purple[500] }} />
          <h1> Loading </h1>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Card>
            <CardHeader component="h1" title={this.state.randomName} />
            <CardMedia className="media" image={this.state.randomThumbnail} />
            <CardContent>
              <Typography variant="title"> Ingredients </Typography>
              <ul>{ingredientList}</ul>
              <Typography variant="title"> Instructions </Typography>
              <Typography paragraph variant="body1">
                {this.state.randomInstructions}
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    }
  }
}

export default SearchRecipePage;
