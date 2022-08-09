import React from "react";
import NewComponent from "./NewComponent";
import { Provider, useDispatch } from "react-redux";
import store from "./Redux/store";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ExtraComponent from "./ExtraComponent";
import { getDataAction } from "./Redux/Actions/getData";

const NewApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <h1>Components</h1>
        <Switch>
          <Route exact path="/" component={NewComponent} />
          <Route exact path="/extracomponent" component={ExtraComponent} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default NewApp;
