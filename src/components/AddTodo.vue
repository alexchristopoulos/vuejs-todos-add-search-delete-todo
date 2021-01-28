<template>
  <div>
     <v-text-field
            label="Add Todo"
            prepend-inner-icon="mdi-plus"
            class="add-todo"
            v-model="todoText" placeholder="Type here the name of the todo">
      </v-text-field>
    <v-btn color="primary" @click="addTodo()">Add todo</v-btn>
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
.add-todo {
  max-width: 500px;
}
</style>