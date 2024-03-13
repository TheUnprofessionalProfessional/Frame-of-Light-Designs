import React from "react";
import PropTypes from "prop-types";
import { TopNav } from "../../constants/TopNav";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {TopNav.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

Navbar.PropTypes = {
  depthLevel: PropTypes.number,
  menu: PropTypes.array,
  index: PropTypes.number,
};

export default Navbar;
