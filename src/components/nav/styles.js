import styled from "styled-components";

export const Wrapper = styled.nav`
    background: #007eb6;
    width: 100%;
    transition: all 0.5s;
    position: sticky;
    top: 0;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LogoItem = styled.li`
    overflow: hidden;
`;

export const LogoImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`;


