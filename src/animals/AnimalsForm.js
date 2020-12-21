import React, { useContext, useState } from "react"
import { StoreContext } from '../stores/storeContext'

export const AnimalsForm = () => {
  const { animalsStore } = useContext(StoreContext);
  const [animal, setAnimal] = useState("");

  return (
    <form
      onSubmit={(e) => {
        animalsStore.addAnimal(animal);
        setAnimal("");
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={animal}
        onChange={(e) => {
          setAnimal(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};
