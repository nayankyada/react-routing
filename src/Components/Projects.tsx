import React from "react";
import {
  NavLink,
  Route,
  Redirect,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import ProjectItem from "./ProjectItem";
import ProjectList from "./ProjectList";
const Index: React.FC = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <p className="text-3xl mt-4">Projects </p>
      <ul className="flex space-x-6">
        <ul>
          <li>
            <NavLink
              className={"text-red-500"}
              activeClassName="text-indigo-700"
              isActive={(match, location) => {
                console.log(location);
                if (match?.isExact) {
                  return true;
                }
              }}
              to={"${match.path}/project-list"}
            >
              Project List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"text-red-500"}
              activeClassName="text-indigo-700"
              isActive={(match, location) => {
                if (match?.isExact) {
                  return true;
                }
              }}
              to={`${match.path}/sdsdsdsdsd`}
            >
              Project Id
            </NavLink>
          </li>

          <li>
          <NavLink
              className={"text-red-500"}
              activeClassName="text-indigo-700"
              isActive={(match, location) => {
                if (match?.isExact) {
                  return true;
                }
              }}
              to={`${match.path}/passobject`}
            >
              PassObject
            </NavLink>
          </li>
        </ul>
      </ul>
      <Switch>
        <Route path={`${match.path}/project-list`} component={ProjectList} />
        <Route
          path={`${match.path}/passobject`}
          render={() => (
            <Redirect
              to={{
                pathname: "/about",
                search: "?orderBy=type",
                state: {
                  from: "proectpage",
                  msg: "passing state using redirect component",
                },
              }}
            />
          )}
        />
        <Route path="${match.path}/:pid" component={ProjectItem} />
      </Switch>
    </div>
  );
};

export default Index;
