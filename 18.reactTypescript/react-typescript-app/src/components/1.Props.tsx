import React from "react";

type firstProps = {
  name: string;
  page: number;
  isLoggedIn: boolean;
};
const Greet = (props: firstProps) => {
    
  return (
    <div >
      <p>
        {props.name} && {props.page}
      </p>{" "}
     <p > is logged In : {props.isLoggedIn} boolean</p>
    </div>
  );
};

export default Greet;
