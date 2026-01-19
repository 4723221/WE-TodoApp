import { createRouter, createWebHistory } from 'vue-router'
import TodoListView from '../views/TodoListView.vue'
import AboutView from '../views/AboutView.vue'
import TodoDetailView from '../views/TodoDetail.vue'

const routes = [
    { path: '/', name: 'TodoList', component: TodoListView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/todos/:id', name: 'TodoDetail', component: TodoDetailView }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router