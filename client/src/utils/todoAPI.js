import axios from 'axios';

export default {
    //gets all todo entries
    getTodos: function() {
        return axios.get('/api/todos');
    },
    //get entry with given ID
    getTodoByID: function(id) {
        return axios.get('api/todos/' + id)
    },
    //delete todo by ID
    deleteTodo: function(id) {
        return axios.delete('/api/todos/' + id)
    },
    //save a todo to the DB
    saveTodo: function(todoData) {
        return axios.post('/api/todos', todoData)
    },
    

}