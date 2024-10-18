<template>
  <div id="nav_header">
    <h1>Task Manager</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/addTask">Add Task</router-link>

    </nav>
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body{
  font-family: "Work Sans", sans-serif;
}
#nav_header {
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
}

nav {
  margin-bottom: 20px; 

  display: flex; 
  justify-content: flex-end; 
}

nav a {
  text-decoration: none; 
  color: #007BFF; 
  margin-left: 20px;
  font-weight: bold; 
  transition: color 0.3s; 
}

nav a:hover {
  color: #0056b3; /* Darker color on hover */
}
</style>
