import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  IconButton,
  Divider,
  List,
  ListItem,
  Drawer,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectIsDarkModeOn } from "../redux/selectors";
import { switchThemeMode } from "../redux/actions";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Route, Switch as RouteSwitch, withRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Graphs from "../components/pages/Graphs";
import Tables from "../components/pages/Tables";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import TableChartIcon from "@material-ui/icons/TableChart";

function mapStateToProps(state) {
  return {
    isDarkModeOn: selectIsDarkModeOn(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    switchThemeMode: bindActionCreators(switchThemeMode, dispatch),
  };
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    height: "100vh",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    height: "100vh",
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    height: "100%",
    overflow: "auto",
    marginTop: "64px",
    padding: "1rem",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

function NavBarBase({ switchThemeMode, isDarkModeOn, history }) {
  const classes = useStyles();
  console.log(history);
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ flex: 1 }}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Covid Updates</Typography>
          <div style={{ flex: 1 }}></div>
          <Switch
            checked={isDarkModeOn}
            onChange={() => switchThemeMode()}
            name="mode"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          {isDarkModeOn ? (
            <Brightness2Icon style={{ color: "#F4F1C9" }} />
          ) : (
            <WbSunnyIcon style={{ color: "#FCD440" }} />
          )}
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => history.push("/graphs")}>
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary="Graphs" />
            </ListItem>
            <ListItem button onClick={() => history.push("/tables")}>
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Tables" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Integrations" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <RouteSwitch>
            <Route path="/" component={Home} exact />
            <Route path="/graphs" component={Graphs} exact />
            <Route path="/tables" component={Tables} exact />
          </RouteSwitch>
        </main>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBarBase));
