import { makeAutoObservable } from 'mobx'

export const AnimalsStore = makeAutoObservable({
  animals: ["Tiger"],
  addAnimal: (animal) => {
    AnimalsStore.animals.push(animal);
  },
  get animalsCount() {
    return AnimalsStore.animals.length;
  },
})
