
<template>
  <nav class="navbar navbar-expand-lg navbar-lights">
  <div class="container">
    <router-link  class="navbar-brand" :to="{name:'Home'}">Navbar</router-link >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        
         <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" :to="{name:'Logout'}" >Logout</router-link>
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
.navbar-lights{
    background-color:#2c2929
}
</style>
