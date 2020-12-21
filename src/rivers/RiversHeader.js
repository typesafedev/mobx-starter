import React, { useContext } from "react";
import { StoreContext } from "../stores/storeContext";
import { useObserver } from "mobx-react";

export const RiversHeader = () => {
  const { riversStore } = useContext(StoreContext);
  return useObserver(() => <h1>{riversStore.count} Rivers!</h1>);
};
