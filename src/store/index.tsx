import { init } from "@rematch/core";
// import { count } from "../models/count";
const count = {
  state: 0
};
const user = {
  state: 0
};
const store = init({
  models: {
    count,
    user
  }
});
console.log(store.getState());

export { store };
