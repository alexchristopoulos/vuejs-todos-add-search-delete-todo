<template>
  <div id="app">
    <h1>Todos List</h1>
    <SearchTodo v-on:search-todo="searchTodo"/>
    <br>
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo"/>
    <br><br>
    <AddTodo v-on:add-todo="addNewTodo"/>
  </div>
</template>

<script>

import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";
import SearchTodo from "@/components/SearchTodo";

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    SearchTodo
  },
  data () {
    return {
      todos: [
        {
          title:'test todo 1',
          completed: false,
          hidden: false
        },
        {
          title: 'test completed todo 2',
          completed: true,
          hidden: false
        }
      ],
      searchValue: ''
    };
  },
  methods: {
    addNewTodo: function(newTodo){
      this.todos = [...this.todos, newTodo];
    },
    deleteTodo: function(todo){
      this.todos = this.todos.filter( x => x != todo );
    },
    searchTodo: function(searchValue) {
      
      this.searchValue = searchValue;

      if(searchValue == '') 
        this.todos = this.todos.map(x => {

          let xx = x;
          xx.hidden = false;
          return xx;

        });
      else
        this.todos = this.todos.map(x => {

          let xx = x;
          xx.hidden = !x.title.includes(searchValue);
          return xx;

        });
    }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
