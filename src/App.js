import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSaignUpPage from './pages/SignInAndSaignUpPage/SignInAndSaignUpPage'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSaignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
