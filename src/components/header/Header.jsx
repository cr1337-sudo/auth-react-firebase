import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import { Avatar, IconButton } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../Reducer";

const Header = () => {
  const [{ isOpen }, dispatch] = useStateValue();
  const toggleMenu = () => {
    dispatch({
      type: actionTypes.TOGGLE_MENU,
      isOpen: !isOpen,
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="header__menu">
        <h3>Home</h3>
        <h3>
          Quick Menu{" "}
          <span>
            <IconButton>
              <ExpandMore />
            </IconButton>
          </span>
        </h3>
      </div>
      <div className="header__right">
        <form className="hola" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
