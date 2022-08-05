import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";

//Pages Components
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";

//App Components
import NavBar from "./components/NavBar";


function App() {

  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
