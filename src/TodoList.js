import React, { Component } from 'react'
import AddListForm from "./AddListForm"
import "./TodoList"
import AddList from "./AddList"
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: []
        }
    }
    createTodoHandler = (newToDo) => {
        this.setState({
            todo: [...this.state.todo, newToDo]
        })
    }

    deleteHandler = (id) => {
        this.setState({
            todo: this.state.todo.filter(to => to.id != id)
        })
    }
    update = (id, updateText) => {
        const updatedTodo = this.state.todo.map(to => {
            if (to.id === id) {
                return {
                    ...to, todo: updateText
                }
            } else {
                return to
            }

        }
        )
        this.setState({
            todo: updatedTodo
        })
    }
    toggleCopletion = (id) => {
        const completeUpdate = this.state.todo.map((to => {
            if (to.id === id) {
                return { ...to, completed: !to.completed }

            } else {
                return to
            }
        }))
        this.setState({
            todo: completeUpdate
        })
    }
    render() {
        const todos = this.state.todo.map((to) => (
            <AddList
                deleteToDo={() => this.deleteHandler(to.id)}
                key={to.id}
                id={to.id}
                todo={to.todo}
                completed={to.completed}
                updateTodo={this.update}
                toggleCopletion={this.toggleCopletion}
            />
        )
        );
        return (
            <div className="container">
                <div className=" ">
                    <div className="heading">
                        <h1 className="heading__title">To-Do List</h1>
                        <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" />
                    </div>
                    <div className="App ">
                        <AddListForm createTodo={this.createTodoHandler} />
                        {todos}
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoList