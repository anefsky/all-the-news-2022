import React from "react";
import Story from "../story";
import { Wrapper, SectionHead } from "./styles";

const Stories = ({ stories, section }) => {
  return (
    <Wrapper>
      <SectionHead>{section}</SectionHead>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </Wrapper>
  );
};

export default Stories;