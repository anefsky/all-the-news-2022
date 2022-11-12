import React from "react";
import { Wrapper, SiteTitle } from "./styles";

const Header = ({siteTitle}) => {
  return (
    <Wrapper>
      <SiteTitle>{siteTitle}</SiteTitle>
    </Wrapper>
  );
};

export default Header;
