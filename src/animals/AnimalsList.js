import React, { useContext } from "react"
import { StoreContext } from '../stores/storeContext'
import { useObserver } from "mobx-react";

export const AnimalsList = () => {
  const { animalsStore } = useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {animalsStore.animals.map((a) => (
        <li key={a}>{a}</li>
      ))}
    </ul>
  ));
};
