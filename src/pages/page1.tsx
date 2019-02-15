import * as React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import multiLevelRouter from "../routers/multiLevelRouter";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
class Page1 extends React.Component {
  public render() {
    return (
      <div>
        <h2>
          Multi-level <DeleteOutlined className="test" />
        </h2>
        <Grid container={true} spacing={16}>
          {multiLevelRouter.map((route, index) => (
            <Grid item={true} xs={4} key={index}>
              <Card>
                <CardContent>
                  <Link to={route.path} className="Nav-link">
                    {route.name}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Page1;
