import { createStore } from 'vuex';
import axios from 'axios'; 
const store = createStore({
  state() {
    return {
      tasks: [],
      currentPage: 1,
      totalTasks: 0,
      tasksPerPage: 5,
    };
  },
  mutations: {
    setTasks(state, tasks) {
        state.tasks = tasks; 
    },
    setTotalTasks(state, total) {
      state.totalTasks = total;
    },
    setPage(state, page) {
      state.currentPage = page;
    },
    addTask(state, newTask) {
      state.tasks=[newTask,...state.tasks];

    },
    editTask(state, updatedTask) {
      const index = state.tasks.findIndex((t) => t.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {
 async fetchTasks({ commit }, { page = 1, limit = 5 } = {}) {
  const offset = (page - 1) * limit;
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${offset}&_limit=${limit}`);
  commit('setTasks', resp.data);
  const totalResp = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
  commit('setTotalTasks', totalResp.data.length);
  commit('setPage', page);
},
    async addTask({ commit }, task) {
      const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', task);
      commit('addTask', resp.data);
    },
    async editTask({ commit }, updatedTask) {
      const resp = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTask.id}`, updatedTask);
      commit('editTask', resp.data);
    },
    async deleteTask({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('deleteTask', id);
    },
  },
  getters: {
    totalPages(state) {
      return Math.ceil(state.totalTasks / state.tasksPerPage);
    },
  },
});

export default store;
