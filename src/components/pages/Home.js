import React from "react";
import { Button, Typography } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

function HomeBase({ isDarkModeOn, switchThemeMode }) {
  return (
    <div style={{ display: "flex" }}>
      <Typography variant="h1">Home</Typography>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeBase);
