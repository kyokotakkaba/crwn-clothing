import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    {/* <Link to="/topics">aaa</Link> */}
    <h1>HATS PAGE</h1>
  </div>
);

const TopicsList = () => (
  <div>
    <h1>TOPICS LIST</h1>
  </div>
);

const TopicDetail = () => (
  <div>
    <h1>TOPIC DETAIL PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicsId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
