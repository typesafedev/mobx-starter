import { makeAutoObservable } from "mobx";
//import { makeRiver } from "./makeRiver";
import _ from "lodash";

export const RiversStore = makeAutoObservable({
  rivers: ["Nile"],
  //rivers: [makeRiver({ name: "Yantzee", length: 1000 })],
  add: (river) => {
    RiversStore.rivers.push(river);
  },
  remove: (river) => {
    _.remove(RiversStore.rivers, (i) => i === river);
  },
  get count() {
    return RiversStore.rivers.length;
  },
});
