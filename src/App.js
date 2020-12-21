import React from "react";
import { AnimalsPage } from "./animals";
import { RiversPage } from "./rivers";
import { StoreProvider } from "./stores/storeContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <RiversPage />} />
          <Route path="/rivers" exact render={() => <RiversPage />} />
          <Route path="/animals" exact render={() => <AnimalsPage />} />
          <Route path="/animals/:name" exact render={({match}) => <AnimalsPage match={match}/>} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}
