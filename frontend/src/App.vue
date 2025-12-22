<script setup lang=ts>
import { computed, ref } from 'vue';
import AddTodo from './components/AddTodo.vue';
const name = ref('Vue 3 with TypeScript');
type Todo = { id: number; title: string; completed: boolean };
// Hardcoded (pseudo) todo data
const todos = ref<Todo[]>([
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Write report', completed: true },
  { id: 3, title: 'Call Alice', completed: false },
]);
const unfinishedCount = computed(() => {
  return todos.value.filter(todo => !todo.completed).length;
});

</script>

<template>
  <div id="app">
    <section class="todo-app">
      <h2>
        Todos
        <span style="margin-left: 0.5rem; font-size: 0.9em;">
    ({{ unfinishedCount }})
  </span>
      </h2>
      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
          style="display:flex; align-items:center; gap:0.5rem; margin:0.25rem 0;"
        >
          <input type="checkbox" v-model="todo.completed" />
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
            {{ todo.title }}
          </span>
       </li>
      </ul>
    </section>
    <section>
      <AddTodo v-model:todos="todos" />
    </section>
  </div>
</template>