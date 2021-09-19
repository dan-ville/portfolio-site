import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work.component";

import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { Wrapper } from "./components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext,  useState } from "react";
import { themes } from "./theme/theme";
import Quiz from "./components/Quiz/Quiz";

export const AppContext = createContext()

function App() {
  const storedTheme = JSON.parse(localStorage.getItem("globalTheme"))
  const [globalTheme, setGlobalTheme] = useState(storedTheme || themes[0])
  
  const context = {
    globalTheme, 
    setGlobalTheme
  }

  return (
    <AppContext.Provider value={context}>
      <ThemeProvider theme={globalTheme}>
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
              <Route exact path="/quiz">
                <Quiz />
              </Route>
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
    </AppContext.Provider>

  );
}

export default App;
