import React from "react";
import Appname from "./Components/Appname";
import AddTodo from "./Components/AddTodo";
import ItemRow1 from "./Components/ItemRow1";

function Todo() {
  return (
    <>
      <div>
      <Appname/>
        <div class="container text-center mt-4">
        <AddTodo />
        <ItemRow1/>
        </div>
      </div>
  
    </>
  );
}

export default Todo;
