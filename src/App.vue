<template>
  <div id="app">
    <v-row align="center" justify="center">
      <v-col align="center" justify="center"> Todos </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <SearchTodo v-on:search-todo="searchTodo" />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <br>
    <div class="todo-list-container">
      <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
    </div>
    <br>
    <v-divider></v-divider>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <AddTodo v-on:add-todo="addNewTodo" />
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
  data() {
    return {
      todos: [
        {
          title: "test todo 1",
          completed: false,
          hidden: false,
        },
        {
          title: "test completed todo 2",
          completed: true,
          hidden: false,
        },
      ],
      searchValue: "",
    };
  },
  methods: {
    addNewTodo: function (newTodo) {
      this.todos = [...this.todos, newTodo];
    },
    deleteTodo: function (todo) {
      this.todos = this.todos.filter((x) => x != todo);
    },
    searchTodo: function (searchValue) {
      this.searchValue = searchValue;

      if (searchValue == "")
        this.todos = this.todos.map((x) => {
          let xx = x;
          xx.hidden = false;
          return xx;
        });
      else
        this.todos = this.todos.map((x) => {
          let xx = x;
          xx.hidden = !x.title.includes(searchValue);
          return xx;
        });
    },
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
