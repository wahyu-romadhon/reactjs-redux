import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

function componentB(props) {
  return (
    <div>
      <div>Nilai sekarang</div>
      <div>nilai: {props.nilai}</div>
      <div>Id User: {_.get(props.users, "data.id")}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(componentB);
