import {Link, useRouteMatch, Switch, Route} from "react-router-dom";
import Topic from "./Topic";


const Topics = () =>{
  let match = useRouteMatch();

  console.log('path',match.path);
  console.log('url',match.url);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h2>Please select a topic.</h2>
        </Route>
      </Switch>
    </div>
  )
}

export default Topics;