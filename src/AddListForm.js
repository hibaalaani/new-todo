import React, { Component } from 'react'
import uuid from "uuid"
export default class AddListForm extends Component {

    state = {
        todo: ""
    }


    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault(e)
        const newToDo = { ...this.state, id: uuid(), completed: false }
        this.props.createTodo(newToDo)

        this.setState({
            todo: ""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="todo">NEW TODO</label>
                    <input type="text"
                        id="todo"
                        value={this.state.todo}
                        name="todo"
                        onChange={this.onChangeHandler}
                    />
                    <button><span>Add Todo</span></button>
                </form>
            </div>
        )
    }
}
