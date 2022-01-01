<template>
  <div>
   <navbar></navbar>
    <div class="container">

      <div class="fullcard">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Product Name</h5>
            <p class="card-text">64556</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="fullcard">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Product Name</h5>
            <p class="card-text">64556</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>

       <div class="fullcard">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Product Name</h5>
            <p class="card-text">64556</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>

       <div class="fullcard">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Product Name</h5>
            <p class="card-text">64556</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>

    </div>
     <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
name: 'Home',
  components: { Footer, Navbar }

}
</script>


<style>
.container{
  padding:30px 10px;
}
.fullcard{
    width:33%;
    display: inline-flex;
    padding:10px 0px;
}
</style>
