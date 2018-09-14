import { name } from "./../App";
import { MealsDBApiService } from './../MealsDBApiService'
import { Recipe } from "../ModelClass/Recipe";
import * as React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import purple from "@material-ui/core/colors/purple";

interface IState {
  userInput: string;
  randomName: string;
  randomThumbnail: string;
  randomInstructions: string;
  randomIngredients: any[];
  randomIndex: any;
  randomingredientList: any;
}

// let ingredientList: any;

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
      randomingredientList: null
    };
  }

  componentDidMount() {
    console.log(this.state.userInput)
    let apiCall = new MealsDBApiService();
    apiCall.getSearchRequest(this.state.userInput, (recipe:Recipe) => {

    })
  }

  render() {
    return <h1>{this.state.userInput}</h1>;
  }
}

export default SearchRecipePage;
