import { createStore } from "vuex";
export default createStore({
  state: {
    count: 1,
    list: [
      {
        done: false,
        text: "task1",
      },
    ],
  },
  getters: {
    counter: (state) => state.count,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    deincrement(state) {
      state.count--;
    },
    listAppend(state, task_test) {
      let task = {
        done: false,
        text: task_test,
      };
      state.list.push(task);
    },
  },
});
