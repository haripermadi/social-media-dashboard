import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: hsl(227, 47%, 96%);
  flex-direction: column;
  padding: 20px;
  transition: transform 0.5s ease-out;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    transform: scale(0.95);
    background-color: #2af598;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const TextCount = styled.span`
  font-size: 24px;
  font-weight: bold;
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
