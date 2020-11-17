import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionType } from "../redux/action";
import { fetchUsers } from "../api";

function ComponentA() {
  const nilai = useSelector((state) => state.nilai);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      await dispatch(fetchUsers());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: actionType.ADD_DATA })}>
        Klik Tambah {nilai}
      </button>
    </div>
  );
}

export default ComponentA;
