<template>
    <div>
      <h2>Add a Job</h2>
      <form @submit.prevent="addJob">
        <input v-model="titre" placeholder="Job Title" required />
        <input v-model="description" placeholder="Description" required />
        <input v-model="salaire" placeholder="Salary" required />
        <input v-model="date" type="date" required />
        <input v-model="experience" placeholder="Experience" required />
        <button type="submit">Add Job</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        titre: "",
        description: "",
        salaire: "",
        date: "",
        experience: ""
      };
    },
    methods: {
      async addJob() {
        await axios.post("http://localhost:3000/jobs", {
          titre: this.titre,
          description: this.description,
          salaire: this.salaire,
          date: this.date,
          experience: this.experience
        });
        this.$router.push("/");
      }
    }
  };
  </script>
  