import React from "react";

const NavItem = ({navItem, setSection, section}) => {
  const sendSection = (section) => {
    setSection(section);
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
