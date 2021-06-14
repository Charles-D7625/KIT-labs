import React from "react";
import "./styles.css";
import Layout from "./comp/Layout";
import MainPage from "./comp/MainPage";
import ProfilePage from "./comp/ProfilePage";
import SignInPage from "./comp/SignInPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
