import React from "react";

import {
  Container,
  TopLine,
  ContainerAccount,
  TextAccount,
  Count,
  Follower,
  ContainerStatistic,
  SmallText,
} from "./card-social.styles";
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

const CardSocial = ({ icon, account, isIncrease, followers, upDownCount }) => {
  const color =
    icon === "fb"
      ? "hsl(208, 92%, 53%)"
      : icon === "twitter"
      ? "hsl(203, 89%, 53%)"
      : icon === "ig"
      ? ""
      : "hsl(348, 97%, 39%)";
  const isIg = icon === "ig" ? true : false;
  return (
    <Container>
      <TopLine bgcolor={color} isIg={isIg} />
      <ContainerAccount>
        {getLogo(icon)}
        <TextAccount>{account}</TextAccount>
      </ContainerAccount>
      <Count>{followers >= 10000 ? `${followers / 1000}k` : followers}</Count>
      <Follower>FOLLOWERS</Follower>
      <ContainerStatistic isIncrease={isIncrease}>
        {isIncrease ? <IconUp /> : <IconDown />}
        <SmallText>{upDownCount} Today</SmallText>
      </ContainerStatistic>
    </Container>
  );
};

export default CardSocial;
