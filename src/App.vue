<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Create from './components/create-user/CreateUserComponent.vue'
</script>

<template>
  <div> 
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand order-md-last">TESTE</a>
      </div>
    </nav>
  </div>
  <router-view/>
</template>
