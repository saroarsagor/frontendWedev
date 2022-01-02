<template>

    <div style="width:100%">
    <router-link :to="{name:'Product-Create'}" class="btn btn-primary">Create Product</router-link>
        <table class="table w-100">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           
            <tr v-for="(item, index) in getAllProduct" :key="item.id">
            <th scope="row">{{index+1}}</th>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.qty}}</td>
             <td>
                <router-link :to="`/edit-product/${item.id}`" class="btn btn-primary btn-sm btncss">Edit</router-link>
                <a href="" class="btn btn-danger btn-sm" @click.prevent = "deleteProduct(item.id)">Delete</a>
             </td>
            </tr>
        </tbody>
        </table>

    </div>
</template>

<script>
import axios from 'axios'
export default {

 mounted() {
       this.$store.dispatch("allProduct")
},

computed:{
    getAllProduct(){
        return this.$store.getters.getProduct
    }
},


 methods: {
    
     deleteProduct(id){
         axios.delete('http://127.0.0.1:8000/api/v1/product/'+id).then(res=>{
             this.$store.dispatch("allProduct")
             // eslint-disable-next-line no-undef
            toastr.success(res.message)
             
         }).catch(error => {
             // eslint-disable-next-line no-unused-vars
             for(const[k, v] of Object.entrise(error.response.data.errors)){
                 //eslint-disable-next-line no-undef
                toastr.error(v)
             }
         })
      }
}

    
}
</script>



<style>
.breadcrumb-item a{
    font-size:20px;
}

</style>