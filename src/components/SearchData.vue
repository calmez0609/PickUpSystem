<template>
    <div>
      搜尋 : <input type="text" v-model="searchQuery" @input="search">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      search() {
        this.$emit('search', this.searchQuery);
      },
    },
  };
  </script>