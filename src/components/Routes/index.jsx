import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../../App.js";
import Profile from "../Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;