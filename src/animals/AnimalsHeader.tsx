import React, { useContext } from "react";
import { StoreContext } from "../stores/storeContext";
import { observer } from "mobx-react"

export const AnimalsHeader = observer(() => {
  const { animalsStore } = useContext(StoreContext)
  return <h1>{animalsStore.animalsCount} Animals!</h1>
})
