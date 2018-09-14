import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import purple from "@material-ui/core/colors/purple";
import "./../App.css";
import { MealsDBApiService } from "./../MealsDBApiService";
import { Recipe } from "../ModelClass/Recipe";

interface IState {
  randomName: string;
  randomThumbnail: string;
  randomInstructions: string;
  randomIngredients: any[];
  randomIndex: any;
  randomingredientList: any;
}

let ingredientList: any;

class RandomRecipePage extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      randomName: "",
      randomThumbnail: "",
      randomInstructions: "",
      randomIngredients: [],
      randomIndex: 0,
      randomingredientList: null
    };
  }
  componentDidMount() {
    let apiCall = new MealsDBApiService();
    apiCall.getRandomRequest((recipe: Recipe) => {
      this.setState({
        randomName: recipe.mealName,
        randomIngredients: recipe.ingredients,
        randomIndex: recipe.index,
        randomThumbnail: recipe.thumbnail,
        randomInstructions: recipe.instructions
      });
      ingredientList = this.state.randomIngredients.map((ingredient, index) => {
        return (
          <li key={index}>
            {ingredient.name}: {ingredient.measure}
          </li>
        );
      });
      this.setState({ randomingredientList: ingredientList });
    });
    // console.log(ingredientList);
    // console.log(this.state.randomThumbnail);
  }

  render() {
    if (
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

export default RandomRecipePage;
