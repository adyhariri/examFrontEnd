import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">Home</Route>
            <Route path="/fav">favorite</Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;