import React from "react";

type ChildrenPropsToReactCompoProp = {
  children: React.ReactNode;
};
//React.ReactNode is the correct type for the children prop.  It can accept strings, numbers, JSX elements, arrays of JSX elements, fragments, or even null or undefined.  Using string would limit you to only passing strings as children.

const ChildrenPropsToReactCompo:React.FC<ChildrenPropsToReactCompoProp> = ({ children }) => {
  return <div>{children}</div>;
};

export default ChildrenPropsToReactCompo;
