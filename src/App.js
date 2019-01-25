import React, { Component } from "react";
import "./App.css";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddAPhoto from "@material-ui/icons/AddAPhoto";
import Crop from "@material-ui/icons/Crop";
import Edit from "@material-ui/icons/Edit";
import Settings from "@material-ui/icons/Settings";
import  logo from "./img/logo.png";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#3d4047" }} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <img src={logo} alt="Logo" />
          <Settings className={"Settings"} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const SideMenu = props => (
  <div style={{ width: 70, height: "700px", backgroundColor: "#3d4047", position: "relative", float:"left"}} >
     <AddAPhoto className={"Camera"} />
     <Crop className={"Crop"} />
    <Edit className={"Edit"} />
  </div>

);

const SideMenuConfig = props => (
  <div style={{ width: 240, height: "700px", backgroundColor: "#2A2C31" , position: "relative", float:"left"}} />
);

const BackGround = props => (
  <div style={{ width: 970, height: "700px", backgroundColor: "#0E0E0E" , position: "relative", float:"left"}} />
);



ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(ButtonAppBar);

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar classes={styles} />
        <SideMenu />
        <SideMenuConfig />
        <BackGround />
      </div>
    );
  }
}

export default App;
