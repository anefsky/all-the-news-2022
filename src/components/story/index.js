import React from "react";
import { Wrapper, Entry, StoryImg, StoryTitle, StoryPara } from "./styles";

const Story = ({story}) => {
  return (
    <Wrapper href={story.short_url}>
      <Entry>
        <StoryImg
          src={
            story.multimedia
              ? story.multimedia[1].url
              : "/img/no-image.png"
          }
          alt="images"
        />
        <div>
          <StoryTitle>{story.title}</StoryTitle>
          <StoryPara>{story.abstract}</StoryPara>
        </div>
      </Entry>
    </Wrapper>
  );
};

export default Story;
