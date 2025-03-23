<template>
    <div>
      <label>filteer by salary:</label>
      <input v-model="minSalary" type="number" @input="$emit('filter', { minSalary })" /><br>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { minSalary: 0 };
    }
  };
  </script>
  