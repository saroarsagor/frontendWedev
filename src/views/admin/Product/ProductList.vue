<template>

    <div style="width:100%">
    <router-link :to="{name:'Product-Create'}" class="btn btn-primary">Create Product</router-link>
        <table class="table w-100">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>

    </div>
</template>

<script>
import axios from 'axios'
export default {
 data(){
    	return {
            ProductLists: [],
        }
    },

   methods: {
       getData(){
                axios.get('http://127.0.0.1:8000/api/v1/product')
                .then(response => {
                    console.log(response);
                    this.ProductLists=response.data;
                })
                .catch(e => {
                    console.log(e);
                })
            },
   },


    mounted() {
       this.getData()
    }
    
}
</script>



<style>
.breadcrumb-item a{
    font-size:20px;
}
.breadcrumb{}
</style>