import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/checkout"></Route>
      <Route path="/hq"></Route>
    </Switch>
  );
};
export default Routers;
