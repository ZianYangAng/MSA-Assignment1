import * as React from "react";
import "./App.css";
import Input from "@material-ui/core/Input";
import logo from "./pic.svg";
import Button from "@material-ui/core/Button";
import { MealsDBApiService } from "./MealsDBApiService";
import { Recipe } from "./ModelClass/Recipe";
import { Link } from 'react-router-dom';

const call = new MealsDBApiService();

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Noods No More</h1>
          <p className="App-intro">
            Search up any recipe or press the random button for a random recipe
          </p>
          <p>
            <Input className="input" placeholder="Search for a recipe here" />
            <Link to="/RandomRecipe">
            <Button
              variant="contained"
              color="inherit"
              onClick={() =>
                call.getRandomRequest((recipe: Recipe) => {
                  console.log(recipe);
                })
              }
            >
              Search
            </Button>
            </Link>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
