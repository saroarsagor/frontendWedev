
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link  class="navbar-brand" :to="{name:'Home'}">Navbar</router-link >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Home'}" >Home</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'About'}" >About</router-link>
        </li>

         <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Register'}" >Register</router-link>
        </li>
           
        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" :to="{name:'Login'}" >Login</router-link>
        </li>

         <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" :to="{name:'Logout'}" >Logout</router-link>
        </li>

         <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Dashboard'}" >Dashboard</router-link>
        </li>
           
      
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    loggedIn(){
      return this.$store.getters.loggedIn
    }

  }
  
}
</script>

<style scoped>

</style>
