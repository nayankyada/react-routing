import { Switch } from "react-router-dom";
import { NavLink, Route } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Projects from "./Components/Projects";
import "styles/global.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex space-x-2">
            <ul>
              <NavLink
                className={"text-red-500"}
                activeClassName="text-indigo-700"
                isActive={(match, location) => {
                  console.log(location);
                  if (match?.isExact) {
                    console.log(match);
                    return true;
                  }
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </ul>
           
            <ul>
              <NavLink
                className={"text-red-500"}
                activeClassName="text-indigo-700"
                isActive={(match, location) => {
                  console.log(location);
                  if (match?.isExact) {
                    return true;
                  }
                }}
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </ul>
            <ul>
              <NavLink
                className={"text-red-500"}
                activeClassName="text-indigo-700"
                isActive={(match, location) => {
                  console.log(match);
                  if (match) {
                    return true;
                  }
                }}
                to={"/projects"}
              >
                Projects
              </NavLink>
            </ul>
          </ul>
        </div>
        <div>
          <button
            className="p-2 bg-indigo-500"
            onClick={() => {
              setIsLoggedIn((prev) => !prev);
            }}
          >
            {isLoggedIn ? "Log Out" : " Log In"}
          </button>
        </div>
      </div>
      <Switch>
        <Route
          path="/dashboard"
          render={() => (isLoggedIn ? <Dashboard /> : <Redirect to={"/"} />)}
        />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
