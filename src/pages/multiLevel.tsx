import * as React from "react";
import { Route } from "react-router-dom";
import multiLevelRouter from "../routers/multiLevelRouter";

class MultiLevel extends React.Component {
  public render() {
    return (
      <div>
        {multiLevelRouter.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </div>
    );
  }
}

export default MultiLevel;
