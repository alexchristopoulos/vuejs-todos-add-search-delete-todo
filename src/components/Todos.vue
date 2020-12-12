<template>
    <div class="todos">
       
            <div v-bind:todos="todos" v-for="todo in todos" v-bind:key="todo.id" v-bind:hidden="todo.hidden">
                <Todo v-bind:todo="todo" v-on:delete-todo="deleteTodo"/>
                
            </div>

    </div>
</template>


<script>

import Todo from "@/components/Todo";

export default {
    name: "Todos",
    props: ["todos"],
    components: {
        Todo
    },
    methods: { 
        deleteTodo: function(todo) {
            
            this.$emit('delete-todo', todo);
        }
    }
}
</script>

<style>

</style>