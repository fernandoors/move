import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import QuotePage from "../pages/quote/QuotePage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/quote/:id">
          <QuotePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
