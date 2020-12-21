import { makeAutoObservable } from 'mobx'
import {remove} from 'lodash'

export const AnimalsStore = makeAutoObservable({
  animals: ["Tiger"],
  add: (animal) => {
    AnimalsStore.animals.push(animal)
  },
  remove: (animal) => {
    remove(AnimalsStore.animals, (i) => i === animal)
  },
  get animalsCount() {
    return AnimalsStore.animals.length
  },
})
