import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: [],
            completeList: [],
            task: ''
        }
    }
    render(){
        return (
            <div className="App">
                <h1 class='title'>To-do List</h1>
                <form onSubmit={(e) =>this.addTodo(e)}>
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Todo Item'
                        value={this.state.task}
                        onChange={(e) => this.setState({task: e.target.value})}
                    />
                    <button type='submit'>Add Todo</button>
                </form>

                <div class='wrapper'>
                    <div id='todo-list'>
                         <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo} />
                    </div>
                    <div id='completed-list'>
                        <TaskList title={'Completed'} buttonText={"Delete"} tasks={this.state.completeList} buttonFunction={this.deleteTodo} />
                    </div>
                </div>
            </div>
        );
    }
    addTodo(e){
        e.preventDefault();
        this.setState({task: '', todoList: [ ...this.state.todoList, this.state.task] });
    }
    removeTodo = key =>{
        let todoList = this.state.todoList;
        let index = todoList.indexOf(key);
        let completeList = this.state.completeList;
        if(index > -1){
            todoList.splice(index, 1);
            completeList.push(key);
        }
        this.setState({todoList: todoList, completeList:completeList});
    }

    deleteTodo = key =>{
        console.log(key)
        let completeList = this.state.completeList;
        let index = completeList.indexOf(key);
        if(index >-1){
            completeList.splice(index,1);
        }
        this.setState({completeList:completeList});
    }
}

export default App;