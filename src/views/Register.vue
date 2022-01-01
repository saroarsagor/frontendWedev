<template>
    <div>
     <navbar></navbar>
        <div class="container fulllogin">
            <div class="row justify-content-md-center">
                <div class="col-md-6">
                    <div class="card" >
                        <div class="card-header">
                            User Register form
                        </div>
                        <div class="card-body">
                                <form @submit.prevent="register">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" v-model="formData.name">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" v-model="formData.email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">mobile address</label>
                                        <input type="number" class="form-control" id="mobile" v-model="formData.mobile">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" v-model="formData.password">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password Confirmation</label>
                                        <input type="password" class="form-control" id="password_confirmation" v-model="formData.password_confirmation">
                                    </div>
                                    <div class="text-end">
                                        <button type="submit" class="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: 'Register',
 components: { Footer, Navbar },
  data(){
      return{
          formData:{
              name: null,
              email: null,
              mobile: null,
              password: null,
              password_confirmation: null
          }
      }
  },
  methods:{
      register(){
         this.$store.dispatch('register', this.formData).then(res=>{
             // eslint-disable-next-line no-undef
            toastr.success(res.message)
             this.$router.push({
                 name: 'Login'
             })
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
.fulllogin{
    padding: 162px 0px;
        margin-bottom: 130px;
}
</style>