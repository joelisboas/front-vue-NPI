<template>
  <div id="id1" class="container app"> 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand order-md-last">NAV BAR</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">+ Novo Usuário</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/list-user">Lista de Usuários</router-link>
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

.app {
  background-color:blanchedalmond;
}

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