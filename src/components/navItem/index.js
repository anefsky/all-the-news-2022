import React from "react";

const NavItem = ({navItem, setSection, section}) => {
  const sendSection = (theSection) => {
    setSection(theSection);
  };

  return (
    <li>
      <a
        className={navItem === section ? "active" : ""}
        href={`#${navItem}`}
        onClick={() => sendSection(navItem)}
      >
        {navItem}
      </a>
    </li>
  );
};
export default NavItem;
