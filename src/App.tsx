import * as React from "react";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import Grid from "@material-ui/core/Grid";

import "./App.css";
import sideNavRouter from "./routers/sideNavRouter";

import Header from "./pages/header";
import SideNav from "./pages/sideNav";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
});

class App extends React.Component {
  public render() {
    const history = createBrowserHistory();
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <div className="App">
            <Grid container={true} spacing={16}>
              <Grid item={true} xs={12}>
                <Header />
              </Grid>
              <Grid item={true} xs={4}>
                <SideNav />
              </Grid>
              <Grid item={true} xs={8}>
                {sideNavRouter.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                ))}
              </Grid>
            </Grid>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
