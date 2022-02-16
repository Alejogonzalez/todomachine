//import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
 {text: "Cortar Cebolla", completed: false},
 {text: "Tomar el curso intro a react", completed: false},
 {text: "llorar a la lloreria", completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>     
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
