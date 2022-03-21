import { createStore } from "vuex";
export default createStore({
  state: {
    count: 1,
    list: [
      {
        done: false,
        text: "task1",
      },
      {
        done: true,
        text: "task2",
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
    itemAppend(state, task_test) {
      let task = {
        done: false,
        text: task_test,
      };
      //add task in fist array index
      state.list.unshift(task);
    },
    itemDelete(state,index){
      state.list.splice(index, 1);
    },
    updateStatus(state,data){
      state.list[data.index].done = data.status;
      console.log(state.list[data.index]);
    }
  },
});
