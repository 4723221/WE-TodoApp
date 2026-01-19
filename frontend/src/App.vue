<script setup lang=ts>
import { computed, ref } from 'vue';
import AddTodo from './components/AddTodo.vue';
import { useTodoStore } from './stores/todoStore';
import { RouterView, RouterLink } from 'vue-router';
const name = ref('Vue 3 with TypeScript');

const todoStore = useTodoStore();

</script>

<template>
  <div id="app">
    <header>
      <h2>Todos</h2>
    </header>

    <main id="main-content">
      <router-view />
    </main>

    <footer>
      <ul>
        <!-- <li
          v-for="todo in todoStore.todos"
          :key="todo.id"
          style="display:flex; align-items:center; gap:0.5rem; margin:0.25rem 0;"
        >
          <input type="checkbox" v-model="todo.completed" />
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
            {{ todo.title }}
          </span>
          <button @click="todoStore.removeTodo(todo.id)">
            削除
          </button>
       </li> -->
        <li><router-link to="/todos">Todo List</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </footer>
    <!-- <section>
      <AddTodo />
    </section> -->
  </div>
</template>
<style scoped>
  #main-content { padding: 1rem; border-style: solid; border-width: 2px; }
</style>