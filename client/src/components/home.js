import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CreateTodo from './create-todo.component';
import EditTodo from './edit-todo.component';
import TodosList from './todos-list.component';


class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It's good to be home</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" alt='yourmom' />
                <Route path='/edit/:id' component={EditTodo} />
                <Route path='/create' component={CreateTodo} />
                <Route path='/todos' component={TodosList} />
            </div>
        )

    }
}

export default Home
