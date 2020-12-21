import React, { createContext } from "react";
import { RiversStore } from "../rivers/RiversStore";
import { AnimalsStore } from "../animals/AnimalsStore";

export const RootStore = {
  riversStore: RiversStore,
  animalsStore: AnimalsStore,
}

export const StoreContext = createContext(RootStore)

type Props = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: Props): JSX.Element => {
  return <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>;
};
