import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 940px;
    margin: 40px auto;
    background: white;
    padding: 1rem;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);

    display: grid;
    grid-template-columns: repeat(1fr 1fr);
    grid-template-rows: repeat(1fr 1fr);
    grid-gap: 1rem;
    grid-template-areas:
    "sectionhead sectionhead"
    "entry entry";
`;

export const SectionHead = styled.h2`
    font-family: Lobster;
    color: #007eb6;
    font-size: 2.5rem;
    text-transform: capitalize;
    padding-bottom: 0.25rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #007eb677;
    grid-area: sectionhead;
`
