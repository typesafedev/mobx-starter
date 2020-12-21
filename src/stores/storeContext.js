import React, { createContext } from "react";
import { RiversStore } from "../rivers/RiversStore";
import { AnimalsStore } from "../animals/AnimalsStore";

export const RootStore = {
  riversStore: RiversStore,
  animalsStore: AnimalsStore,
};

export const StoreContext = createContext(RootStore);

export const StoreProvider = ({ children }) => {
  return (<StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>)
};
