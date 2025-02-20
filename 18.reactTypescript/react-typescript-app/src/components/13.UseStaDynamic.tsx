import React from "react";
import { useState } from "react";

type User = {
  name: "string";
  email: "string";
};

const UseStaDynamic = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    setUser({
      name: "ansa",
      email: "aaa@",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      <p style ={{color : "#fff"}}>Hello {user ? user?.name : 'guest'}</p>
      <p style ={{color : "#fff"}}>{user?.email}</p>
    </div>
  );
};

export default UseStaDynamic;
