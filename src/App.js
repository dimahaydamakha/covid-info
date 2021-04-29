import React, { useLayoutEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import getThemeObject from "./theme";
import { connect } from "react-redux";
import { selectIsDarkModeOn } from "./redux/selectors";
import NavBar from "./components/NavBar";
function mapStateToProps(state) {
  return {
    isDarkModeOn: selectIsDarkModeOn(state),
  };
}

function AppBase({ isDarkModeOn }) {
  const [theme, setTheme] = useState();
  useLayoutEffect(() => {
    setTheme(createMuiTheme(getThemeObject(isDarkModeOn)));
  }, [isDarkModeOn]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default connect(mapStateToProps)(AppBase);
