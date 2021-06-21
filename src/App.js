import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Pages
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import NotFound from "./components/pages/404";
import Catalago from "./components/pages/Catalago";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="content-wrap">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route exact path="/catalago" component={Catalago} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
