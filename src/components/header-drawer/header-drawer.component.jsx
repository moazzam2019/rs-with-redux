import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarButton from "../navbar/navbar-button/navbar-button.component";
import { Fragment } from "react";
import "./header-drawer.styles.scss";
import { useSelector } from "react-redux";
import { setCurrentToken, setCurrentUser } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

export default function SwipeableTemporaryDrawer() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    localStorage.clear();
    dispatch(setCurrentToken(""));
    dispatch(setCurrentUser(null));
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="appbar-links">
        <NavbarButton label="Home" link="../" />
        <NavbarButton label="Shop" link="/shop" />
        <NavbarButton label="Contact" link="/contact" />
        {currentUser ? (
          <NavbarButton label="Sign Out" onClick={signOutHandler} link="../" />
        ) : (
          <NavbarButton label="Sign In" link="/sign-in" />
        )}
      </div>
      {currentUser ? (
        <>
          <Divider />
          <h3 style={{ textAlign: "center" }}>User Panel</h3>
          <Divider />
          <div className="appbar-links">
            <NavbarButton label="Update Data" link="/update-data" />
            <NavbarButton label="Change Password" link="/update-password" />
          </div>{" "}
        </>
      ) : (
        <div></div>
      )}

      {currentUser && currentUser.role === "admin" ? (
        <>
          {" "}
          <Divider />
          <h3 style={{ textAlign: "center" }}>Admin Panel</h3>
          <Divider />
          <div className="appbar-links">
            <NavbarButton label="Add Phone" link="/add-product" />
            <NavbarButton label="Update Phone" link="/shop/update-product" />
            <NavbarButton label="Delete Phone" link="/shop/delete-product" />
          </div>
        </>
      ) : (
        <div></div>
      )}
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <MenuIcon onClick={toggleDrawer("left", true)}></MenuIcon>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
