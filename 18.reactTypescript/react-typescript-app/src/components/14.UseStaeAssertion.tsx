import React, { useState } from "react";

type User = {
  name: "string";
  email: "string";
};
const UseStaeAssertion = () => {
  const [user, serUser] = useState<User>({} as User); //using as we can write without optional chaining operator
  const handle = () => {
    serUser({
      name: "ansa",
      email: "a@gmail.com",
    });
  };
  return (
    <div>
      <button onClick={handle}>Login</button>
      <p>{user.name}</p>
    </div>
  );
};

export default UseStaeAssertion;
