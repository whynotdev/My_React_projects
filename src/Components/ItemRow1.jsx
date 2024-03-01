import React, { useEffect, useState } from "react";

function ItemRow1() {
  let item = "Buy Milk";

  return (
    <div>
      <div class="row">
        <div class="col-6">{item}</div>
        <div class="col-4">24/02/2023</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger  container-fluid my-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemRow1;
