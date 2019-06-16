import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route
          exact={true}
          path="/success"
          render={() => (<Success />)}
        />
        <Route
          exact={true}
          path="/cancel"
          render={() => (<Cancel />)}
        />
      </Switch>
    );
  }
}

export default App;