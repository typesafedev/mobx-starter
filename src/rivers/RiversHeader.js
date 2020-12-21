import React, { useContext } from "react";
import { StoreContext } from "../stores/storeContext";
import { observer } from "mobx-react";

export const RiversHeader = observer(() => {
  const { riversStore } = useContext(StoreContext);
  return <h1>{riversStore.count} Rivers!</h1>
});
