import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
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
