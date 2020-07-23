import React, { Component } from 'react'
import "./TodoList.css"
export default class AddList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.todo
        }
    }

    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })

    }
    onChangeHandler = (e) => {
        this.setState({
            task: e.target.value
        })
    }
    toggleCopletionHandler = (e) => {
        this.props.toggleCopletion(this.props.id)
    }
    render() {

        let result;
        if (this.state.isEditing) {
            result = (
                <div className="toDoList">
                    <form onSubmit={this.onSubmitHandler}>
                        <input type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.onChangeHandler}
                        />
                        <button ><span>Save</span></button>
                    </form>
                </div>
            )
        } else {
            result = <div className="toDoList" >
                <li onClick={this.toggleCopletionHandler} className={this.props.completed ? "completed" : ""}>{this.props.todo}</li>
                <div>
                    <button onClick={this.toggleForm}><span>Edit</span></button>
                    <button onClick={this.props.deleteToDo}><span>X</span></button>
                </div>
            </div>
        } return result

    }
}
