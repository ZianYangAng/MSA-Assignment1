import * as React from 'react';
import './App.css';
import AppBar from './components/AppBar'
import Input from '@material-ui/core/Input';
import logo from './pic.svg';
import Button from '@material-ui/core/Button';
import { MealsDBApiService } from './MealsDBApiService'

let call = new MealsDBApiService()

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <AppBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Noods No More</h1>
          <p className="App-intro">
          Search up any recipe or press the random button for a random recipe
        </p>
        <p>
          <Input className="input" placeholder="Search for a recipe here"/>
          <Button variant='contained' color='inherit' onClick={call.getRandomRequest}>
              Search
          </Button>
        </p>
        </header>
      </div>
    );
  }
}

export default App;
