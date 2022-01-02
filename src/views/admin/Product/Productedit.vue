<template>

    <div style="width:100%">
    <router-link :to="{name:'Product'}" class="btn btn-primary">Back Product List</router-link>
        <div class="card" >
            <div class="card-header">
               Create Form
            </div>
            <div class="card-body">
            <form @submit.prevent="ProductCreate">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="name" v-model="formData.name">
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Price</label>
                    <input type="number" class="form-control" id="price" v-model="formData.price">
                </div>

                 <div class="form-group">
                    <label for="exampleInputEmail1">Qty</label>
                    <input type="number" class="form-control" id="qty" v-model="formData.qty">
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Description</label>
                    <textarea type="number" row="5" class="form-control" id="description" v-model="formData.description"></textarea>
                </div>

                 <div class="form-group">
                    <label for="exampleInputEmail1">Image</label>
                    <input type="file" class="form-control" @change="onChange">
                </div>
                

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                
                
            </form>
                                
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
     data(){
      return{
          formData:{
              name: null,
              price: null,
              qty: null,
              description: null,
              image: null
          }
      }
  },

  methods:{

       onChange(e){
               var filereader = new FileReader();
                filereader.readAsDataURL(e.target.files[0]);

                filereader.onload = (e) => {

                    this.formData.image = e.target.result;
                }
            },


      ProductCreate(){
         this.$store.dispatch('ProductCreate', this.formData).then(res=>{
             // eslint-disable-next-line no-undef
            toastr.success(res.message)
             this.$router.push({
                 name: 'Product'
             })
         }).catch(error => {
             // eslint-disable-next-line no-unused-vars
             for(const[k, v] of Object.entrise(error.response.data.errors)){
                 //eslint-disable-next-line no-undef
                toastr.error(v)
             }
         })
      },
      
  }

  


}
</script>



<style>
.breadcrumb-item a{
    font-size:20px;
}
.card{margin-top:20px}
</style>