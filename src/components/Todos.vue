<template>
    <div class="todos">
        <v-row>
            <div v-bind:todos="todos" v-for="todo in todos" :key="todo.id" :hidden="todo.hidden">
                <Todo :todo="todo" @delete-todo="deleteTodo"/>
            </div>
        </v-row>
            <span v-if="todos.length < 1">No todos</span>
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
    .todos {
        min-height: 80px;
    }
</style>