import { useState } from "react";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <div className="container-md box">
      <h3>{`Hello ${user}!`}</h3>
      <Component2 user={user} />
    </div>
  );
}

function Component2({ user }) {
  return (
    <div className="box">
      <p>Component 2</p>
      <Component3 user={user} />
    </div>
  );
}

function Component3({ user }) {
  return (
    <div className="box">
      <p>Component 3</p>
      <p>Hi {user} again</p>
    </div>
  );
}

export default Component1;
