import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GetResult from './Functions/GetResults';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

// const themeLight = createMuiTheme({
//   palette: {
//     background: {
//       default: "#e4f0e2"
//     }
//   }
// });

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#23272A"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

export default function App() {
  return (
    <MuiThemeProvider theme={themeDark}>
      <CssBaseline />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              exact
              path="/:id/:pasteName/"
              render={(props) => <GetResult {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}
