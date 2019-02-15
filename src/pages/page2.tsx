import * as React from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";

class Page2 extends React.Component {
  public render() {
    return (
      <Paper>
        <h1 className="App-title">Page2</h1>

        <Link to="/multiLevel" className="Nav-link">
          Go back!
        </Link>
      </Paper>
    );
  }
}

export default Page2;
