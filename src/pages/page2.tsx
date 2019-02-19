import * as React from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
export const Test = props => {
  return <h1>Hi {props.name}</h1>;
};
class Page2 extends React.Component {
  public render() {
    return (
      <Paper>
        <h1 className="App-title">Page2</h1>
        <Test name="melin" />
        <Test name="IF" />
        <Link to="/multiLevel" className="Nav-link">
          Go back!
        </Link>
      </Paper>
    );
  }
}

export default Page2;
