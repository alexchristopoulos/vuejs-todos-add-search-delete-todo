<template>
  <v-col style="width: 300px">
    <v-card
      color="#385F73"
      dark
      class="todo-container"
      :class="{ 'completed-todo': todo.completed }"
    >
      <v-card-title class="headline">
        <input type="checkbox" @click="toggleCompleted" :checked="todo.completed"/>
        <span class="todo" :class="{ 'completed-todo-text': todo.completed }">{{
          todo.title
        }}</span>
      </v-card-title>
      <v-card-actions>
        <v-btn outlined rounded small @click="deleteTodo"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    deleteTodo() {
      this.$store.commit("deleteTodo", this.$props.todo);
    },
    toggleCompleted() {
      this.$store.commit("toggleTodoCompleted", this.$props.todo);
    },
  },
};
</script>

<style scoped>
.completed-todo {
  color: gray;
  background-color: rgb(225, 232, 223) !important;
}

.completed-todo-text {
  text-decoration: line-through;
}
</style>