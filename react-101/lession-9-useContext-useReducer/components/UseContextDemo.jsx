import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function UseContextDemo() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <div className="container-md box">
        <h3>{`Hello ${user}!`}</h3>
        <Component2 user={user} />
      </div>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <div className="box">
      <p>Component 2</p>
      <Component3 />
    </div>
  );
}

function Component3() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="box">
      <p>Component 3</p>
      <p>{`Hello ${user} again!`}</p>
      <button
        className="btn"
        onClick={() => {
          setUser("Harry Potter");
        }}
      >
        Change user name
      </button>
    </div>
  );
}

export default UseContextDemo;
