import React from "react";
import { Button, Typography } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

function GraphsBase({ isDarkModeOn, switchThemeMode }) {
  return (
    <div style={{ display: "flex" }}>
      <Typography variant="h1">Graphs</Typography>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphsBase);
