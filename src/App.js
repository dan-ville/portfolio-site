import Home from "./components/Home/Home";
import About from "./components/About/About";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme/theme";
import Header from "./components/Header/Header";
import { Wrapper } from "./components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(themes[0])

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
