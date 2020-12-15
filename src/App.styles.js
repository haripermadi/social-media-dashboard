import styled, { css } from "styled-components";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

export const ContainerApp = styled.div`
  padding: 0 10vw;
  background-color: ${(props) =>
    props.isDarkMode ? "hsl(230, 17%, 14%)" : "white"};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

export const HeaderContainerLeft = styled.div``;

export const HeaderContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerCard = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const StyledIcon = styled.div`
  /* color: gold; */
  font-size: 40px;
  background: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &:before {
    display: initial;
  }
`;
