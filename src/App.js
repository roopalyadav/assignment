import React, { useState } from "react";
import Header from "./components/Header";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { DataProvider } from "./components/DataProvider";
import Cart from "./components/Cart";
import Error from "./components/Error";

function App() {

  const [search, setSearch] = useState("");

  return (
    <DataProvider>
      <>
        <Switch>
          <Route exact path="/error404" component={Error} />
          <Route>
            <Header setSearch={setSearch} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/cart" component={Cart} />
              <Redirect to="/error404" />
              <Products />
            </Switch>
            <Footer />  
          </Route>
        </Switch>
      </>
    </DataProvider>
  );
}

export default App;
