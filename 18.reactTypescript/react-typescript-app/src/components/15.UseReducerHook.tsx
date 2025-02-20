import React, { useReducer } from "react";

const initialState = 0;

type ActionType = UpdateAction | ResetAction;

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};

const reducer = (state: number, action: ActionType) => {
  switch (action.type) {
    case "increment":
      //   return state + (action.payload || 0);//there is another way of doing action.payload || 0
      return state + action.payload;
    case "decrement":
      //   return state - (action.payload || 0);
      return state - action.payload;
    case "reset":
      return initialState;
    default:
      return state;
  }
};


const UseReducerHook: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Counter Using useReducer</h2>
      <p>Count : {count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Subtract
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducerHook;

// const initialState = 0;
// const reducer = (state:number, action:string) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state-1;
//       case "reset":
//         return initialState;
//     default:
//       return state;
//   }
// };
// const UseReducerHook = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h2>Counter Using useReducer</h2>
//       <p>Count : {count}</p>
//       <button onClick={() => dispatch("increment")}>Add</button>
//       <button onClick={() => dispatch("decrement")}>Subtract</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// };

// export default UseReducerHook;
