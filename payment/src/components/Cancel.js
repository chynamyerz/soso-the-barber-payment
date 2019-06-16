import * as React from "react";
import {Helmet} from "react-helmet";

class Cancel extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>payment cancelled</title>
        </Helmet>
      </div>
    );
  }
}

export default Cancel;