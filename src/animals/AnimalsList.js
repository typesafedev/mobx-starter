import React, { useContext } from "react";
import { StoreContext } from "../stores/storeContext";
import { observer } from "mobx-react";

export const AnimalsList = observer(() => {
  const { animalsStore } = useContext(StoreContext);

  return (
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
  )
});
