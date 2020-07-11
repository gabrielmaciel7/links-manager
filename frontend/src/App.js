import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ManageLinks from "./screens/Manage/Links";
import ManageLinksCreate from "./screens/Manage/Links/Create";
import ManageLinksEdit from "./screens/Manage/Links/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/manage/links/create">
            <ManageLinksCreate />
          </Route>
          <Route path="/manage/links/edit/:id">
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
