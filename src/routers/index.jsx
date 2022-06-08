import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Checkout from "../pages/checkout";
import Home from "../pages/home";
import HqDetails from "../pages/hqDetails";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/hq/:id">
        <HqDetails />
      </Route>
    </Switch>
  );
};
export default Routers;
