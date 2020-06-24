import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: hsl(227, 47%, 96%);
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  position: relative;
  transition: transform 0.5s ease-out;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    transform: scale(0.95);
    background-color: hsl(227, 80%, 96%);
  }
`;

export const TopLine = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  top: 0;
  background: ${(props) => props.bgcolor};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  ${({ isIg }) =>
    isIg &&
    css`
      background-image: linear-gradient(
        to right,
        hsl(37, 97%, 70%),
        hsl(329, 70%, 58%)
      );
    `}
`;

export const ContainerAccount = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const TextAccount = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
  color: hsl(228, 12%, 44%);
`;

export const Count = styled.h1`
  font-size: 46px;
  font-weight: bold;
  margin: 0;
  padding: 15px 0 5px 0;
`;

export const Follower = styled.span`
  font-size: 14px;
  color: grey;
  letter-spacing: 2px;
`;

export const ContainerStatistic = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) =>
    props.isIncrease ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"};
`;

export const SmallText = styled.span`
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
`;
