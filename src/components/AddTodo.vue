<template>
  <div>
    <v-text-field
      label="Add Todo"
      prepend-inner-icon="mdi-plus"
      class="add-todo"
      filled
      v-model="todoText"
      placeholder="Type here the name of the todo"
    >
    </v-text-field>
    <v-btn @click="addTodo">Add todo</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    addTodo() {
      this.$store.commit("addTodo", this.$data.todoText);
    },
  },
};
</script>

<style scoped>
.add-todo {
  max-width: 500px;
}
</style>