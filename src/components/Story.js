import React from "react";
import styled from "styled-components";

const Entry = styled.article`
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-column-gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px dotted #00000033;
  a {
    color: #007eb6;
    text-decoration: none;
  }
  h3 + p {
    margin-top: 0;
  }
  img {
  }
`;

const Story = (props) => {
  return (
    <Entry>
      <img
        src={
          props.story.multimedia
            ? props.story.multimedia[1].url
            : "/img/no-image.png"
        }
        alt="images"
      />
      <div>
        <h3>
          <a href={props.story.short_url}>{props.story.title}</a>
        </h3>
        <p>{props.story.abstract}</p>
      </div>
    </Entry>
  );
};

export default Story;
