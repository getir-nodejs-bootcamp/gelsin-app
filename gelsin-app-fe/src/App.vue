<script setup>
import axios from "axios";
import { ref } from "vue";

const itemList = ref([]);

const fetchProducts = () => {
  axios.get("https://gkandemir-getir-backend.herokuapp.com/products").then((product_list_response) => {
    console.log(product_list_response);
    itemList.value = product_list_response?.data || [];
  });
};

fetchProducts();
</script>

<template>
  <div v-for="item in itemList" :key="item._id">
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  color: #d3c3d3;
}
</style>
