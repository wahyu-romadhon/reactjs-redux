import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { actionType } from "../redux/action";

function ComponentA(props) {
  const nilai = useSelector((state) => state.nilai);
  const dispatch = useDispatch();

  //versi kalau kita mau masukkan di function lagi
  // const getMinusData = () => {
  //   return props.handleMinus();
  // };

  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: actionType.ADD_DATA })}>
          Klik Tambah {nilai}
        </button>
        <button onClick={() => dispatch({ type: actionType.MINUS_DATA })}>
          Klik Kurang {nilai}
        </button>
      </div>
      {/* <div>
        <input onChange={handleChange} value={props.id} />
        <button>search</button>
      </div> */}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   console.log("state", state);
//   return state;
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: actionType.ADD_DATA }),
//     handleMinus: () => dispatch({ type: actionType.MINUS_DATA }),
//   };
// };

export default ComponentA;
