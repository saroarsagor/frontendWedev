<template>
    <div>
    </div>
</template>



<script>
export default {
    name: 'Logout',
    created(){
        this.$store.dispatch('logout').then(()=>{
             this.$router.push({
                 name: 'Login'
             })
        })
    }
  
}
</script>

<style scoped>

</style>
