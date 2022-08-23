


<template>
  <div class="div-container1"> 
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand order-md-last">NAV BAR</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Create New User</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/list-user">List Users</router-link>
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
.div-container1 {
  max-width: 1280px;
  background-color: blueviolet;
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>