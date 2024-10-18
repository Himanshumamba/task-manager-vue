  import {createRouter,createWebHistory} from 'vue-router';
  import TaskList from '@/components/TaskList.vue';
  import AddTask from '@/components/AddTask.vue';



  const routes= [

    {Path:'/' ,component :TaskList},

    {path:'/addTask' ,component :AddTask}
  ]

  const  router = createRouter({

    history:createWebHistory(),
    routes
  })



  export  default router;