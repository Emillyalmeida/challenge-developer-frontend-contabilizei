import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../pages/home";
import HqDetails from "../pages/hqDetails";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/checkout"></Route>
      <Route path="/hq/:id">
        <HqDetails />
      </Route>
    </Switch>
  );
};
export default Routers;
