<template>
    <div>
      <h2>{{ job.titre }}</h2>
      <p>{{ job.description }}</p>
      <p>Salary: {{ job.salaire }}</p>
      <p>Date: {{ job.date }}</p>
      
      <router-link to="/">Back</router-link>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return { job: {} };
    },
    async created() {
      const res = await axios.get(`http://localhost:3000/jobs/${this.$route.params.id}`);
      this.job = res.data;
    }
  };
  </script>
  