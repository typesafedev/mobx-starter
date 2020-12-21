import React from "react"
import { RiversForm, RiversHeader, RiversList } from "."

export const RiversPage = (): JSX.Element => {
  return (
    <main>
      <RiversHeader />
      <RiversList />
      <RiversForm />
    </main>
  )
}
