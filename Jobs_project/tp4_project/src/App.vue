<template>
    <div id="app">
      <h1>Job Management App</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Job</router-link>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "App"
  };
  </script>



<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
