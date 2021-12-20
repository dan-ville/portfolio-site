import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { AppWrapper } from "./components/Layout/Layout";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
import { theme } from "./theme/theme";

export const AppContext = createContext();

function App() {
  const context = {
    theme,
  };

  return (
    <AppContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header />
          <Outlet />
        </AppWrapper>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
