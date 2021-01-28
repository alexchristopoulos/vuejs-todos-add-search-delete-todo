<template>
    <div>
         <v-text-field 
            label="Search Todos"
            prepend-inner-icon="mdi-file-search"
            class="search-todo"
            @keyup="searchTodos" placeholder="Type here the name of the todo">
          </v-text-field>
    </div>    
</template>

<script>
export default {
    methods: {
        searchTodos: function(event) {
            this.$emit('search-todo', event.target.value);
        }
    }
}
</script>

<style scoped>
    .search-todo {
        max-width: 500px;
    }
</style>