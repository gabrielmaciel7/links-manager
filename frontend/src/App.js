import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
            <h1>Create link</h1>
          </Route>
          <Route path="/manage/links/edit">
            <h1>Edit link</h1>
          </Route>
          <Route path="/manage/links">
            <h1>Links</h1>
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
