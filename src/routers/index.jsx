import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/home";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/checkout"></Route>
      <Route path="/hq"></Route>
    </Switch>
  );
};
export default Routers;
