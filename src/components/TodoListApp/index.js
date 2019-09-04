import React from "react";
import AddTodoForm from "../AddTodoForm";
import Todo from "../Todo";
import ListTodos from "../ListTodos";
class TodoListApp extends React.Component {
  state = {
    todos: [
      { id: 1, content: "di mua sting" },
      { id: 2, content: "di an sang" },
      { id: 3, content: "di hoc REACTJS" },
      { id: 4, content: "di hoc KMIN" }
    ]
  };
  render() {
    return (
      <div className="container">
        <AddTodoForm />
        <ListTodos>
          {this.state.todos.map(todo => {
            return <Todo content={todo.content} key={todo.id} />;
          })}
        </ListTodos>
      </div>
    );
  }
}
export default TodoListApp;
