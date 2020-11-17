import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionType } from "../redux/action";

function ComponentB() {
  const nilai = useSelector((state) => state.nilai);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: actionType.MINUS_DATA })}>
        Klik Kurang {nilai}
      </button>
    </div>
  );
}

export default ComponentB;
