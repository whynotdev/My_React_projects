import React from "react";

function AddTodo(props) {

 function add() {
    let task = document.getElementById('task').value
    let dates = document.getElementById('dates').value

    console.log(task, dates);
  }
  return (
    <>
      <div>
        <div class="row">
          <div class="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              id="task"
              required
              className="container-fluid "
            />
          </div>
          <div class="col-4">
            <input type="date" className="container-fluid" id="dates" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success container-fluid" onClick={add}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
