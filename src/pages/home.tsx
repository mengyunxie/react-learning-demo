import * as React from "react";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import Clock from "./clock";
class Home extends React.Component {
  public render() {
    return (
      <div>
        <h2>
          New Home <Delete />
        </h2>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Clock />
        <Button variant="contained" color="primary">
          你好，世界
        </Button>
      </div>
    );
  }
}

export default Home;
