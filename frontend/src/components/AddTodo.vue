<script setup lang=ts>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todoStore';

const todoStore = useTodoStore();

const newTitle = ref<string>('');

function addTodo(){
  todoStore.addTodo(newTitle.value);
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
        <button v-on:click="todoStore.addTodo(newTitle)" :disabled="!newTitle.trim()">Add</button>
      </div>
    </section>
</template>