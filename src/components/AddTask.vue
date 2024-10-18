<template>
  <div class="container">
    <nav class="navbar">
      <ul>
 
      </ul>
    </nav>
    
    <h1>Add Task</h1>
    <form @submit.prevent="submitTask">
      <input v-model="newTask.title" placeholder="Task Title" required />
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newTask: { title: '' },
    };
  },
  methods: {
    ...mapActions(['addTask']),
    async submitTask() {
      const taskToAdd = { ...this.newTask, id: Date.now() };

      const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const updatedTasks = [taskToAdd, ...existingTasks];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      await this.addTask(taskToAdd); 
      this.newTask.title = '';
      this.$router.push('/'); 
    },
  },
};
</script>

<style>


body {
  font-family: "Work Sans", sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

input {
    width: calc(100% - 20px);
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s, box-shadow 0.3s;
    margin-bottom: 1rem;
}
#nav_header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;

}
.navbar {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.navbar li {
  margin-left: 20px;
}

.navbar a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.navbar a:hover {
  color: #d9e2eb;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

input[type="text"] {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  border-color: #c0c6cd;
  outline: none;
}

button {
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #d8a3a8;
}

@media (max-width: 600px) {
  .container {
    padding: 10px;
  }
  

}
</style>
