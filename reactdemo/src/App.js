import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import TaskItems from './TaskItems';

function App() {
  return (
    <div className="App">
        <h1>To-do List</h1>
        <input></input>
        <button>Add To-do</button>
        <TaskList />
        <TaskItems />
    </div>
  );
}

export default App;
