<template>
  <div class="container">
    <h1>Task List</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button class="delete-button" @click="deleteTask(task.id)">✖</button>
      </li>
    </ul>

    <!-- Pagination Controls -->
    <div v-if="totalPages > 1" class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['tasks', 'currentPage']),
    ...mapGetters(['totalPages']),
  },
  methods: {
    ...mapActions(['fetchTasks', 'deleteTask']),
    changePage(page) {
      this.fetchTasks({ page, limit: 5 });
    },
  },
  mounted() {
    this.fetchTasks({ page: 1, limit: 5 });
  },
};
</script>

<style scoped>
body{
  font-family: "Work Sans", sans-serif;

}
.container {
  max-width: 600px;
  margin: 0 auto; 
  padding: 20px; 
  background-color: #f8f9fa; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

ul {
  list-style-type: none; 
  padding: 0; 
}

li {
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 10px;
  background-color: #e9ecef;
  margin-bottom: 10px;
  border-radius: 4px;
}


.delete-button:hover {
  color: #c82333; 
}

.pagination {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin-top: 20px; 
}

.pagination button {
  margin: 0 10px; 
  padding: 5px 10px;
}
}
</style>
