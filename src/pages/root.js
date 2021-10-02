import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import PagesFirst from "./firstPage";
import PagesSecond from "./secondPage";

export default function PagesRoot() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/firstPage">
            <PagesFirst />
          </Route>
          <Route path="/secondPage">
            <PagesSecond />
          </Route>
          <Route path="/">
            <PagesFirst />
          </Route>
          <Redirect from="/" to="/firstPage" />
        </Switch>
      </Router>
    </div>
  );
}