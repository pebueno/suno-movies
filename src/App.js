// import "./App.scss";
// import "./index.scss";
// import Navbar from "./components/Navbar";
// import "./App.scss";

// import React, { Component } from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

// //Pages
// import MainPage from "./pages";
// import NotFound from "./pages/404";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={MainPage} />
//           <Route exact path="/404" component={NotFound} />
//           <Redirect to="/404" />
//         </Switch>
//       </Router>
//     );
//   }
// }
// export default App;
import React from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Catalago from "./components/pages/Catalago";
import Movie from "./components/pages/Movie";
// /movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR
// import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalago" component={Catalago} />
        <Route path="/movie/:id" component={Movie} />
        {/* <Route path="/search" component={Search} /> */}
      </Switch>
    </Router>
  );
}

export default App;
