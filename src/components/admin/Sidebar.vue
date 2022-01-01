<template>
<div>
    <ul class="nav flex-column">
        <li class="nav-item">
            <router-link class="nav-link active" :to="{name:'Product'}">Product</router-link >
        </li>
       
    </ul>
  
  </div>
</template>



<script>
export default {
  name: 'Sidebar',
  
}
</script>

<style scoped>
.nav{
    margin-top: 14px;
}
.nav-item a{
    font-size: 20px;
    color:white;
}
.active{
    background:red;
    
}
</style>


