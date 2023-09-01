import React from "react";
import axios from "axios";
import "./App.css";
import Feeling from "../Feeling";
import Understanding from "../Understanding";
import Support from "../Support";
import Comments from "../Comments";
import Review from "../Review";
import FeedBack from "../feedback";

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    // We wrapped out component in a router to be accessible via route, Our route is setting a url and than once you visit that url, it will display the component.
    <Router>
      <Route path="/" exact>
        <Feeling />
      </Route>

      <Route path="/understanding">
        <Understanding />
      </Route>

      <Route path="/support" exact>
        <Support />
      </Route>

      <Route path="/comments" exact>
        <Comments />
      </Route>

      <Route path="/review" exact>
        <Review />
      </Route>

      <Route path="/feedback" exact>
<FeedBack/>
      </Route>
    </Router>
  );
}

export default App;
