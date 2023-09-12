import React from "react";
import { Nav, NavLogo, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import { NavLink as RouterNavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle={{ color: 'black' }}>
            Home
          </NavLink>
          <NavLink to="/signin" activeStyle={{ color: 'black' }}>
            Sign In
          </NavLink>
          <NavLink to="/chat" activeStyle={{ color: 'black' }}>
            Chat
          </NavLink>
          <NavLink to="/chat" activeStyle={{ color: 'black' }}>
            Chat
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/create-sell-order">CreateSellOrder</NavBtnLink>
          </NavBtn>

          
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
