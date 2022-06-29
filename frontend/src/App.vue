<template>
  <div>
    <header>
      <div class="wrapper">
        <Navigation  />
      </div>
    </header>

    <main>

      <router-view></router-view>

    </main>
  </div>

</template>

<script setup>

import { ref } from 'vue';
import Navigation from './components/Navigation.vue';

var placeholder = ref()
placeholder.value = placeholder.value + 0


</script>

<style>


</style>

