<template>
  <div class="todos">
    <v-row>
      <div
        v-for="todo in this.$store.getters.getTodos"
        :key="todo.id"
        :hidden="todo.hidden"
      >
        <Todo :todo="todo" />
      </div>
    </v-row>
    <span v-if="this.$store.getters.getTodosCount < 1">No todos</span>
  </div>
</template>


<script>
import Todo from "@/components/Todo";

export default {
  name: "Todos",
  components: {
    Todo,
  },
};
</script>

<style>
.todos {
  min-height: 80px;
}
</style>