import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <div className="container-md box">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleComplete(todo)}
          />
          <label>{todo.title}</label>
        </div>
      ))}
    </div>
  );
}

export default Todos;
