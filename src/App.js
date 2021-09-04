import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work.component";

import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme/theme";
import Header from "./components/Header/Header";
import { Wrapper } from "./components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState(themes[0]);
  const context = {
    setTheme,
  };

  return (
    <AppContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
