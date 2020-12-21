import React, { useContext } from "react";
import { StoreContext } from "../stores/storeContext";
import { useObserver } from "mobx-react";

export const AnimalsHeader = () => {
  const { animalsStore } = useContext(StoreContext);
  return useObserver(() => <h1>{animalsStore.animalsCount} Animals!</h1>);
};
