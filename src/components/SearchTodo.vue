<template>
    <div>
        <input type="text" v-on:keyup="searchTodos" placeholder="Search todos">
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

</style>