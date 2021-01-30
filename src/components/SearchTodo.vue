<template>
  <div>
    <v-text-field
      label="Search Todos"
      prepend-inner-icon="mdi-file-search"
      class="search-todo"
      v-model="searchText"
      filled
      @keyup="searchTodo"
      placeholder="Type here the name of the todo"
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchTodo() {
      this.$store.commit("searchTodos", this.$data.searchText);
    },
  },
};
</script>

<style scoped>
.search-todo {
  max-width: 500px;
}
</style>