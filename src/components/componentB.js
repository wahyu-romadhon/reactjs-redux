import React from "react";
import { connect } from "react-redux";

function componentB(props) {
  return (
    <div>
      <div>Nilai sekarang</div>
      <div>nilai: {props.nilai}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(componentB);
