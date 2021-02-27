import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
      <Router>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route exact path="/products">
                <Products />
            </Route>
            <Route
                path="/products/:id"
                children={
                    <ProductDetails />
                }
            />
            <Route path="/checkout">
                <Checkout />
            </Route>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
      </Router>
  );
}
