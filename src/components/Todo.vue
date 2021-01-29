<template>
<v-col style="width: 300px">
    <v-card
            color="#385F73"
            dark
            class="todo-container">
            <v-card-title class="headline">
            <input
                type="checkbox"
                v-bind:checked="todo.completed"
                :class="{ 'completed-todo': todo.completed }"
                
            /> 
              <span class="todo">{{ todo.title }}</span>
            </v-card-title>
            <v-card-actions>
                <v-btn outlined
                    rounded
                    small @click="deleteTodo"> Delete </v-btn>
            </v-card-actions>
          </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
      deleteTodo() {
        this.$store.commit('deleteTodo', this.$props.todo)
      }
  }
};
</script>

<style scoped>
.completed-todo {
  text-decoration: line-through;
  color: gray;
  background-color: rgb(225, 232, 223) !important;
}
</style>