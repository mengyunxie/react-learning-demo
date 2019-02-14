import * as React from "react";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
class MultiLevel extends React.Component {
  public render() {
    return (
      <div>
        <h2>
          Multi-level <DeleteOutlined className="test" />
        </h2>
      </div>
    );
  }
}

export default MultiLevel;
