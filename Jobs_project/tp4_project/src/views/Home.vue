<template>
    <div>
      <h2>Job Listings</h2>
      <FilterNav @filter="applyFilter" />
        <br>
        <div v-for="job in filteredJobs" :key="job.id">
          <router-link :to="'/jobs/' + job.id">{{ job.titre }}</router-link> - {{ job.salaire }}
          <button @click="deleteJob(job.id)">Delete</button>
          <router-link :to="'/edit/' + job.id"> <button>Edit</button></router-link>
          <br><br>
        </div>
      
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import FilterNav from "@/components/FilterNav.vue";
  
  export default {
    components: { FilterNav },
    data() {
      return {
        jobs: [],
        filteredJobs: []
      };
    },
    async created() {
      const res = await axios.get("http://localhost:3000/jobs");
      this.jobs = this.filteredJobs = res.data;
    },
    methods: {
      async deleteJob(id) {
        await axios.delete(`http://localhost:3000/jobs/${id}`);
        this.jobs = this.jobs.filter(job => job.id !== id);
        this.filteredJobs = this.jobs;
      },
      applyFilter(criteria) {
        this.filteredJobs = this.jobs.filter(job => job.salaire >= criteria.minSalary);
      }
    }
  };
  </script>
  