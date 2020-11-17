import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

function componentC(props) {
  return <div>Nilai sekarang: {props.nilai}</div>;
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(componentC);
