import * as React from "react";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
class About extends React.Component {
  public render() {
    return (
      <div>
        <h2>
          New About <DeleteOutlined className="test" />
        </h2>
      </div>
    );
  }
}

export default About;
