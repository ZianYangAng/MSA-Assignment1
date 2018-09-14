import * as React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import App from "./App";
import "./App.css";
import AppBar from "./components/AppBar";
import RandomRecipePage from "./components/RecipePagerandom";
import SearchRecipePage from "./components/RecipePageSearch"

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <main className="App">
          <Route exact={true} path="/" component={App} />
          <Route path="/RandomRecipe" component={RandomRecipePage} />
          <Route path="/Search" component={SearchRecipePage}/>
          <Redirect from="*" to="/"/>
        </main>
      </div>
    </BrowserRouter>
  );
};
