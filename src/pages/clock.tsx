import * as React from "react";
export interface ClockProps {}
class Clock extends React.Component<ClockProps, any> {
  public timerID;
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // tslint:disable-next-line:member-access
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // tslint:disable-next-line:member-access
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  public tick() {
    this.setState({
      date: new Date()
    });
  }
  public render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
