import { useContext } from "react";
import { StoreContext, StoreProvider } from "../store";

export default function ContextAndReducerDemo() {
  return (
    <StoreProvider>
      <div className="container-md box">
        <h3>ContextAndReducerDemo</h3>
        <Component3 />
      </div>
    </StoreProvider>
  );
}

const Component3 = () => (
  <div className="box">
    <p>Component 3</p>
    <Component4 />
  </div>
);
const Component4 = () => (
  <div className="box">
    <p>Component 4</p>
    <Component5 />
  </div>
);
const Component5 = () => (
  <div className="box">
    <p>Component 5</p>
    <Component6 />
  </div>
);

function Component6() {
  const { todos, dispatch } = useContext(StoreContext);
  const handleChange = (todo) => dispatch({ type: "COMPLETE", id: todo.id });

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id} className={`todo ${todo.complete ? "complete" : ""}`}>
          <input type="checkbox" onChange={() => handleChange(todo)} />
          {todo.title}
        </p>
      ))}
    </div>
  );
}
