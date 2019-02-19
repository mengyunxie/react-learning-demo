import * as React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
class Form extends React.Component {
  public state = {
    name: "Composed TextField",
    checked: true
  };
  public handleChange = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value }, () => {
      console.log(this.state.name);
    });
  };
  public handleCheckChange = event => {
    console.log(event.target.checked);
    this.setState({ checked: event.target.checked });
    console.log(this.state.checked);
  };
  public save = () => {
    console.log(this.state);
  };

  public render() {
    return (
      <Paper>
        <h1 className="App-title">Form</h1>
        <Input value={this.state.name} onChange={this.handleChange} />
        {this.state.checked ? <p>{this.state.name}</p> : null}
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleCheckChange}
          value="checked"
        />
        <span>{this.state.checked ? "true" : "false"}</span>
        <div>
          <Button variant="contained" color="primary" onClick={this.save}>
            save
          </Button>
        </div>

        <Link to="/multiLevel" className="Nav-link">
          Go back!
        </Link>
      </Paper>
    );
  }
}

export default Form;
