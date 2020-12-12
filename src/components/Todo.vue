<template>
    <div class="todo-container" v-bind:class="{'completed-todo':todo.completed}">
        <input type="checkbox"  v-bind:checked="todo.completed" @click="markComplete">
        <span class="todo">{{ todo.title }}</span>
        <span class="remove" @click="deleteTodo">X</span>
    </div>
</template>

<script>
export default {
    props: ["todo"],
    methods: {
        markComplete: function() {
            this.todo.completed = !this.todo.completed;
        },
        deleteTodo: function() {
            
            this.$emit('delete-todo', this.todo);
        }
    }
}
</script>

<style scoped>
    .completed-todo {
        text-decoration: line-through;
        color: gray;
        background-color: rgb(225, 232, 223)!important;
    }

    .todo-container {
        width: 100%;
        border: 1px outset rgb(227, 227, 227);
        margin-bottom: 2px;
        padding: 12px;
        background-color: rgb(235, 235, 97);
    }

    .remove {
        border: 1px solid red;
        border-radius: 48px;
        color: black;
        padding: 8px;
        background-color: red;
        text-decoration: none!important;
        margin-left: 12px;
        box-shadow: 2px 2px 3px black;
        cursor: pointer;
    }
</style>