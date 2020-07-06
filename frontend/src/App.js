import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ManageLinks from "./screens/Manage/Links";
import ManageLinksCreate from "./screens/Manage/Links/Create";
import ManageLinksEdit from "./screens/Manage/Links/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/manage/links/create">Create link</Link>
              <Link to="/manage/links/edit">Edit link</Link>
              <Link to="/manage/links">Links</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/manage/links/create">
            <ManageLinksCreate />
          </Route>
          <Route path="/manage/links/edit">
            <ManageLinksEdit />
          </Route>
          <Route path="/manage/links">
            <ManageLinks />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
