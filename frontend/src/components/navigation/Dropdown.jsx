import React from "react";
import MenuItems from "./MenuItems";
import PropTypes from "prop-types";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenus} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  src: PropTypes.string,
  submenu: PropTypes.array,
  depthLevel: PropTypes.number,
};

export default Dropdown;
