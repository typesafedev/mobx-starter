import React, { useContext } from "react";
import { StoreContext } from "../stores/storeContext";
import { useObserver } from "mobx-react";

export const RiversList = () => {
  const { riversStore } = useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {riversStore.rivers.map((river) => (
        <li key={river}>
          {river}
          <button type="button" onClick={() => riversStore.remove(river)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  ));
};
