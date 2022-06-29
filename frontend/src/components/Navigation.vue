<template>
  <div class='main-container'>
    
    <nav nav class="navbar navbar-expand-lg navbar-dark bg-dark ">

      <div class="nav-left">

        <div class= "banner">

        </div>

        <div class="left-links">
          <li>
            <router-link class="nav-link text-white font-weight-bold" :to="{ name: 'register' }">1LINK </router-link>
          </li>  
          <li>
            <router-link class="nav-link text-white font-weight-bold" :to="{ name: 'register' }">2LINK </router-link>
          </li>
          <li>
            <router-link class="nav-link text-white font-weight-bold" :to="{ name: 'register' }">3LINK </router-link>
          </li>
          <li>
            <router-link class="nav-link text-white font-weight-bold" :to="{ name: 'register' }">4LINK </router-link>
          </li>
        </div>
        
      </div>

      <div class="nav-right">
        <li>
          <router-link class="nav-link text-white font-weight-bold" :to="{ name: 'register' }">5LINK </router-link>
        </li>  
        <li>
          <router-link class="nav-link text-white font-weight-bold" :to="{ name: 'register' }">6LINK </router-link>
        </li>
        

      </div>

      

    </nav>

  </div>
</template>

<script setup>

</script>

<style scoped>
nav div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
nav {
  display: flex;
  justify-content: space-between;
}

</style>