<script setup lang=ts>
import { ref } from 'vue'; 
const todos = defineModel("todos")
// New todo input state
const newTitle = ref('');
// compute next id from existing todos 
const nextId = ref(Math.max(0, ...todos.value.map((t) => t.id)) + 1); 

function addTodo(){
  const title = newTitle.value;
  todos.value.push({ id: nextId.value++, title, completed: false }); 
  newTitle.value = ''; 
}
</script>
<template>
      <section>
      <h2>New Todo</h2>
      <div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.25rem 0;">
        <input
          v-model="newTitle"
          type="text"
          placeholder="New todo title"
          aria-label="New todo title"
        />
        <button v-on:click="addTodo" :disabled="!newTitle.trim()">Add</button>
      </div>
    </section>
</template>