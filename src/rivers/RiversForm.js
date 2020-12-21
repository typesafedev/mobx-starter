import React, { useContext, useState } from "react"
import { StoreContext } from '../stores/storeContext'

export const RiversForm = () => {
  const { riversStore } = useContext(StoreContext);
  const [river, setRiver] = useState("");

  return (
    <form
      onSubmit={(e) => {
        riversStore.add(river);
        setRiver("");
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={river}
        onChange={(e) => {
          setRiver(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};
