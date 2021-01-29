<template>
  <div id="app">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center"> Todos </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <SearchTodo />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <br />
    <div class="todo-list-container">
      <Todos />
    </div>
    <br />
    <v-divider></v-divider>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <AddTodo />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";
import SearchTodo from "@/components/SearchTodo";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    SearchTodo,
  },
};
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 60px;
}
</style>
