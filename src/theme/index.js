const dark = {
  palette: {
    primary: {
      main: "#ff9800",
    },
    secondary: {
      main: "#e65100",
    },
    type: "dark",
  },
};

const light = {
  palette: {
    // primary: {
    //   light: "#33c9dc",
    //   main: "#BB86FC",
    //   dark: "#008394",
    // },
    // secondary: {
    //   light: "#9778ce",
    //   main: "#7e57c2",
    //   dark: "#583c87",
    // },
    type: "light",
  },
};

export default (mode) => {
  if (mode) return dark;
  return light;
};
