// * Import necessary components from react-router-dom into App.js
// * Make sure to wrap everything in BrowserRouter
// * Create a route to show the list container
// * Create a route to show the create container
// * Create a route to show the detail container. Make sure this route has a variable in it
// * Make sure to wrap all routes in Switch
// * Create links to the list and create routes, put them anywhere in App.js outside of the Switch. 


import React, { Component } from "react";
import "./App.css";
import HouseContainer from "./containers/HouseContainer";
import HousesContainer from "./containers/HousesContainer";
import CreateHouseContainer from "./containers/CreateHouseContainer";
import {BrowserRouter,Route,Switch} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadHouses();

  }
 
  
  render() {
    return (
      <BrowserRouter>
      <div>
      <Switch>

      <Route path="/houses" component={HousesContainer}/>
      <Route path="/createhouse" component={CreateHouseContainer}/>
      <Route path="/house/:id" component={HouseContainer}/>
  
      </Switch>

      </div>
      </BrowserRouter>
    );
  }
}
export default (App);


