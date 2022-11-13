import React from "react";
import { Anchor } from "./styles";

const NavItem = ({navItem, setSection, section}) => {
  const sendSection = (theSection) => {
    setSection(theSection);
  };

  return (
    <li>
      <Anchor
        className={navItem === section ? "active" : ""}
        href={`#${navItem}`}
        onClick={() => sendSection(navItem)}
      >
        {navItem}
      </Anchor>
    </li>
  );
};
export default NavItem;
