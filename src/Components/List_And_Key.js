import React from "react";

function NumberList(props) {
    const numbers = props.naumber;
    const listItems = numbers.map((number) =>
       <li>
         {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default NumberList;