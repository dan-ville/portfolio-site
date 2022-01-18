import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Quiz from "./components/Quiz/Quiz";
import Work from "./components/Work/Work.component";
import Project from "./components/Project/Project.component";
import ProjectsList from "./components/Work/ProjectsList/ProjectsList.component";
import NotFound from "./components/NotFound/NotFound.component";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="work" element={<Work />}>
            <Route index element={<ProjectsList />} />
            <Route path=":projectId" element={<Project />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
