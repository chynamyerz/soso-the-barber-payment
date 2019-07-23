import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import api from "./api/api";

class App extends React.Component {
  state = { time: Date.now() };

  componentDidMount() {
    this.interval = setInterval(async () => {
      this.setState({ time: Date.now() })
      const test = await api.galery()
      console.log(Date().toString(), test.status)
    }, 1500000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;