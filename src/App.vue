<template>
  <div id="app">
  <Header v-if="loggedIn"></Header>
  <div v-if="loggedIn" class="sideBarSection">
   <Sidebar></Sidebar>
  </div>
  
   <div v-if="loggedIn" class="contentBodydashboard">
   <router-view/>
   </div>

   <div v-if="!loggedIn">
   <router-view/>
   </div>
    
    <Footer v-if="loggedIn"></Footer>
  </div>
  
</template>


<script>
import Header from "./components/admin/Header";
import Sidebar from "./components/admin/Sidebar";
import Footer from "./components/admin/Footer";


export default {
  components: { Header,Sidebar,Footer },
   computed: {
    loggedIn(){
      return this.$store.getters.loggedIn
    }

  }
}
</script>


<style>
.sideBarSection{
  height: 100vh;
    background-color: #3a3838;
    width: 10%;
    display: inline-flex;
}
.contentBodydashboard{
   width: 90%;
   display: inline-flex;
   padding: 0px 20px;
}
</style>


