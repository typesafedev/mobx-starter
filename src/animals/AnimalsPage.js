import React from "react";
import { useParams } from "react-router-dom"
import { AnimalsForm, AnimalsHeader, AnimalsList } from "./";

export const AnimalsPage = () => {
  const { name } = useParams()
  console.log(`name ${name}`)
  return (
    <main>
      <AnimalsHeader />
      <AnimalsList />
      <AnimalsForm />
    </main>
  );
};
