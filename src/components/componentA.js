import React from "react";
import { connect } from "react-redux";

function ComponentA(props) {
  //versi kalau kita mau masukkan di function lagi
  const getMinusData = () => {
    return props.handleMinus();
  };

  return (
    <div>
      <button onClick={props.handlePlus}>Klik Tambah {props.nilai}</button>
      <button onClick={() => getMinusData()}>Klik Kurang {props.nilai}</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "ADD_DATA" }),
    handleMinus: () => dispatch({ type: "MINUS_DATA" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA);
