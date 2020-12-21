import React from "react";
import { AnimalsPage } from "./animals";
import { RiversPage } from "./rivers";
import { StoreProvider } from "./stores/storeContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <RiversPage />} />
          <Route exact path="/rivers" render={() => <RiversPage />} />
          <Route exact path="/animals" render={() => <AnimalsPage />} />
          {/* <Route path="/animals/:name" render={({match}) => <AnimalsPage match={match}/>} /> */}
          <Route exact path="/animals/:name" validate={(params: { name: string }) => params.name === "giraffe"}>
            <AnimalsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
};
