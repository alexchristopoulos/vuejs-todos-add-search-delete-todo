<template>
  <div>
    <input placeholder="What you wanna do?" v-model="todoText" />
    <button @click="addTodo()">Add todo</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  methods: {
    addTodo: function () {
      this.$emit('add-todo', {
        id: uuidv4(),
        title: this.$data.todoText,
        completed: false,
        hidden: this.$parent.searchValue == ''?false:!this.$parent.searchValue.includes(this.$data.todoText)
      });
    },
  },
  data() {
    return {
      todoText: "",
    };
  },
};
</script>

<style scoped>
</style>