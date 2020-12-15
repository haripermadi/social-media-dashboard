import React from "react";

import {
  Container,
  ContainerContent,
  TextCount,
  ContainerStatistic,
  SmallText,
} from "./card-count.styles";

import { ReactComponent as IconFb } from "../../assets/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as IconIg } from "../../assets/icon-instagram.svg";
import { ReactComponent as IconYoutube } from "../../assets/icon-youtube.svg";
import { ReactComponent as IconUp } from "../../assets/icon-up.svg";
import { ReactComponent as IconDown } from "../../assets/icon-down.svg";

const getLogo = (icon) => {
  switch (icon) {
    case "fb":
      return <IconFb />;
    case "twitter":
      return <IconTwitter />;
    case "ig":
      return <IconIg />;
    case "youtube":
      return <IconYoutube />;
    default:
      return <IconFb />;
  }
};

const CardCount = ({ icon, title, isIncrease, upDownCount, count }) => {
  return (
    <Container>
      <ContainerContent>
        <span>{title}</span>
        {getLogo(icon)}
      </ContainerContent>
      <ContainerContent>
        <TextCount>{count >= 10000 ? `${count / 1000}k` : count}</TextCount>
        <ContainerStatistic isIncrease={isIncrease}>
          {isIncrease ? <IconUp /> : <IconDown />}
          <SmallText>{upDownCount}%</SmallText>
        </ContainerStatistic>
      </ContainerContent>
    </Container>
  );
};

export default CardCount;
