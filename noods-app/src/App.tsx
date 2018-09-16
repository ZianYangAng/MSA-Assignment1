import * as React from "react";
import "./App.css";
import Input from "@material-ui/core/Input";
import logo from "./pic.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export let name: string;
interface IState {
  searchInput: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  setSearchInput = (event: any) => {
    this.setState({ searchInput: event.target.value });
  };

  settingName(searchName: string) {
    name = searchName;
  }

  componentWillUnmount() {
    this.setState({ searchInput: "" });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Noods No More</h1>
          <p className="App-intro">
            Search up any recipe or press the random button for a random recipe
          </p>
          <p className="input">
            <Input
              placeholder="Search for a recipe here"
              onChange={this.setSearchInput}
            />
            <p className="input">
              <Link to="/RandomRecipe">
                <Button variant="contained" color="inherit">
                  Random
                </Button>
              </Link>
              <Link to="/Search">
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => this.settingName(this.state.searchInput)}
                >
                  Search
                </Button>
              </Link>
            </p>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
