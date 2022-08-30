<template>

  <div id="id1" class="container app"> 
    <nav class="navbar navbar navbar-dark bg-primary navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand order-md-last">AUTO ESTUDO</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">+ Nova Tarefa</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/list-task">Lista de Tarefas</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<style>

#id1{
  max-width: 100%;
  padding: 0;
}

.navbar{
  max-width: 100%;
}

</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>