import * as React from "react";
import {Helmet} from "react-helmet";

class Success extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>payment completed</title>
        </Helmet>
      </div>
    );
  }
}

export default Success;