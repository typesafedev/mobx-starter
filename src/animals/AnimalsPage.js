import React from "react";
import { AnimalsForm, AnimalsHeader, AnimalsList } from "./";

export const AnimalsPage = ({match}) => {
  const name = match?.params;
  return (
    <main>
      <AnimalsHeader />
      <AnimalsList />
      <AnimalsForm />
    </main>
  );
};
