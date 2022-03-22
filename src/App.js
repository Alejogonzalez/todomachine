//import logo from './logo.svg';
// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";


/* const defaultTodos = [
 {text: "Cortar Cebolla", completed: false},
 {text: "Tomar el curso intro a react", completed: false},
 {text: "llorar a la lloreria", completed: false}
];
 */
function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  }
  else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue,setSearchValue] = React.useState('');
  const [todos,setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter(todo => todo.completed == true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }
  else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) => {
    const stringTODOS = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringTODOS);
    setTodos(newTodos);
  };

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text==text);
    const newTodos =[...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text==text);
    const newTodos =[...todos];
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  };


  return (
    <AppUI 
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      toggleCompleteTodo = {toggleCompleteTodo}
      deleteTodo = {deleteTodo}


    />
  );
}

export default App;
