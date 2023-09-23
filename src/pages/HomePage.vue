<script setup>
/*import {blog_data} from "@/storage/faceapi";
const blogs = blog_data().blogs*/

import {onMounted, ref} from "vue";
import axios from "axios";

const blogs= ref()
const url ='https://dummyjson.com/products'
onMounted(async ()=>{
  try {
    const {data} = await axios.get(url);
    blogs.value = data.products
  }catch(error){
    console.log('data fetct error===>',error)
  }
})


</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <template v-for="(blog,index) in blogs">
        <div class="card dark">
          <img :src="blog.thumbnail" class="card-img-top" alt="..." height="200">
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title">{{blog.title}}</h5>
              <p class="card-text">{{blog.description}}</p>
            </div>
            <div class="cta-section">
              <div>{{blog.price}}$</div>
              <router-link :to="{name:'post' ,params:{id:blog.id}}" class="btn btn-light">Buy Now</router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: mintcream;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.card {
  max-width: 90%;
  flex-direction: row;
  background-color: #696969;
  border: 0;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.18);
  margin: 3em auto;
}
.card.dark {
  color: #fff;
}
.card.card.bg-light-subtle .card-title {
  color: dimgrey;
}

.card img {
  max-width: 25%;
  margin: auto;
  padding: 0.5em;
  border-radius: 0.7em;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
.text-section {
  max-width: 60%;
}
.cta-section {
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
.cta-section .btn {
  padding: 0.3em 0.5em;
  /* color: #696969; */
}
.card.bg-light-subtle .cta-section .btn {
  background-color: #898989;
  border-color: #898989;
}
@media screen and (max-width: 475px) {
  .card {
    font-size: 0.9em;
  }
}

</style>