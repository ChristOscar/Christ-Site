import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Christwide Oscar</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          {/* <NavLink to="/shop" activeStyle>
            Shop
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink> */}
          <NavBtnLink to="/login" activeStyle>
            Login
          </NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
