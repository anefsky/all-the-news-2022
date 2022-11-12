import React from "react";
import Story from "../story";

const Stories = ({ stories, section }) => {
  return (
    <div className="site-wrap">
      <h2 className="section-head">{section}</h2>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </div>
  );
};

export default Stories;