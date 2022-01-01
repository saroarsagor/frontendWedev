<template>
    <div>
      <navbar></navbar>
        <div class="container fulllogin">
            <div class="row justify-content-md-center">
                <div class="col-md-6">
                    <div class="card" >
                        <div class="card-header">
                        Login form
                        </div>
                        <div class="card-body">
                                <form @submit.prevent="login">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="credentials.email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="password" v-model="credentials.password">
                                    </div>
                                    <div class="text-end">
                                        <button type="submit" class="btn btn-primary">Login</button>
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
  name: 'Login',
 components: { Footer, Navbar },
  data(){
      return{
          credentials:{
              email: null,
              password: null,
          }
      }
  },
  methods:{
      login(){
         this.$store.dispatch('login', this.credentials).then(res=>{
             // eslint-disable-next-line no-undef
            toastr.success(res.message)
             this.$router.push({
                 name: 'Dashboard'
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