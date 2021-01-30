<template>
  <div id="app">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center"> <h1>Todos Application</h1> </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center"> <p> In this application you can add, delete or search todos. </p> </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <AddTodo />
      </v-col>
    </v-row>
    <br> <br>
     <v-divider></v-divider>
<br><br>
<v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <h2>Todos list</h2>
      </v-col>
    </v-row>
    

    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <SearchTodo />
      </v-col>
    </v-row>
    <br />
    <div class="todo-list-container">
      <Todos />
    </div>
    <br />
   

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
  padding: 20px;
}
</style>
