import * as React from "react";
import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import "./App.css";

import About from "./pages/about";
import Home from "./pages/home";
import MyTable from "./pages/table";
import Header from "./pages/header";

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
                <MenuList>
                  <Link to="/" className="Nav-link">
                    <MenuItem>Home</MenuItem>
                  </Link>
                  <Link to="/about" className="Nav-link">
                    <MenuItem>About</MenuItem>
                  </Link>
                  <Link to="/table" className="Nav-link">
                    <MenuItem>Table</MenuItem>
                  </Link>
                </MenuList>
              </Grid>
              <Grid item={true} xs={8}>
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/table" component={MyTable} />
              </Grid>
            </Grid>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
