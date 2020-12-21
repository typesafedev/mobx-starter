import React, { useContext } from "react";
import { StoreContext } from "../stores/storeContext";
import { useObserver } from "mobx-react";

export const AnimalsList = () => {
  const { animalsStore } = useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {animalsStore.animals.map((animal) => (
        <li key={animal}>
          {animal}
          <button type="button" onClick={() => animalsStore.remove(animal)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  ));
};
