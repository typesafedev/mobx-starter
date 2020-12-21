import { makeAutoObservable } from "mobx";
import { remove } from "lodash";

export const AnimalsStore = makeAutoObservable({
  animals: ["Tiger"],
  add: (animal: string) => {
    AnimalsStore.animals.push(animal);
  },
  remove: (animal: string) => {
    remove(AnimalsStore.animals, (i) => i === animal);
  },
  get animalsCount() {
    return AnimalsStore.animals.length;
  },
});
