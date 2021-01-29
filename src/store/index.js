import Vuex from 'vuex';
import Vue from 'vue';
import {
    v4 as uuidv4
} from "uuid";

Vue.use(Vuex);

const state = {
    todos: [{
            title: "Test todo 1",
            completed: false,
            hidden: false,
        },
        {
            title: "Test todo 2 (completed)",
            completed: true,
            hidden: false,
        },
    ],
    todosSearchValue: ''
};

const mutations = {
    toggleTodoCompleted(state, t) {
        console.log(t);
        state.todos = state.todos.map(todo => {
            if (todo == t)
                return {
                    ...todo,
                    completed: !t.completed
                };
            else
                return todo;
        });
    },
    addTodo(state, title) {

        state.todos.push({
            id: uuidv4(),
            title: title,
            completed: false,
            hidden: state.todosSearchValue.trim() == '' ? false : title.toLowerCase().indexOf(state.todosSearchValue.toLowerCase()) > -1 ? false : true
        });
    },
    deleteTodo(state, t) {
        state.todos = state.todos.filter(todo => todo != t);
    },
    searchTodos(state, text) {

        state.todosSearchValue = text;

        if (text.trim() != '')
            state.todos = state.todos.map(todo => {
                if (todo.title.toLowerCase().includes(text.toLowerCase())) {
                    todo.hidden = false;
                } else {
                    todo.hidden = true;
                }

                return todo;
            });
        else
            state.todos = state.todos.map(todo => {

                todo.hidden = false;

                return todo;
            });
    }
};

const actions = {

};

const getters = {
    getTodos: state => state.todos,
    getTodosCount: state => state.todos.length
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});