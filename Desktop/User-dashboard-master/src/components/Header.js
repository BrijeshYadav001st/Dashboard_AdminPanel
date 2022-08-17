import React from "react";
import Logo from "./image/logo.png";
import {
  Badge,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
//import SideDrawer from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

function Header() {
  const classes = useStyles();
  
  return (
    <>
      <Toolbar style={{backgroundColor:"#212db6" , color:"white"}}>
        <IconButton color="inherit">
          <img src={Logo} alt="logo-Image"  className="logo-image"/>
        </IconButton>
       

        <Typography variant="h6" className={classes.title}>
          Admin Panel
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="#0ba3b0">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>

      <Divider />

     
    </>
  );
}

export default Header;
