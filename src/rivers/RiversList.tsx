import React, { useContext } from "react";
import { StoreContext } from "../stores/storeContext";
import { observer } from "mobx-react";

export const RiversList = observer(() => {
  const { riversStore } = useContext(StoreContext);

  return (
    <ul>
      {riversStore.rivers.map((river: string) => (
        <li key={river}>
          {river}
          <button type="button" onClick={() => riversStore.remove(river)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  )
});
