import React, { useState } from "react";
import logo from "./logo.svg";
import { IconContext } from "react-icons";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

import {
  ContainerApp,
  HeaderContainer,
  HeaderContainerLeft,
  HeaderContainerRight,
  ContainerCard,
  StyledIcon,
} from "./App.styles";

import CardSocial from "./components/card-social/card-social.component";
import CardCount from "./components/card-count/card-count.component";

import { ReactComponent as IconToggleOff } from "./assets/switchoff.svg";
import { ReactComponent as IconToggleOn } from "./assets/switchon.svg";

function App() {
  const [socialAccount, setSocialAccount] = useState([
    {
      id: 1,
      icon: "fb",
      account: "@nathanf",
      isIncrease: true,
      upDownCount: 12,
      followers: 1987,
    },
    {
      id: 2,
      icon: "twitter",
      account: "@nathanf",
      isIncrease: true,
      upDownCount: 99,
      followers: 1044,
    },
    {
      id: 3,
      icon: "ig",
      account: "@realnathanf",
      isIncrease: true,
      upDownCount: 1099,
      followers: 11000,
    },
    {
      id: 4,
      icon: "youtube",
      account: "Nathan F.",
      isIncrease: false,
      upDownCount: 144,
      followers: 8239,
    },
  ]);
  const [staticCount, setstaticCount] = useState([
    {
      id: 1,
      icon: "fb",
      title: "Page Views",
      isIncrease: true,
      upDownCount: 3,
      count: 87,
    },
    {
      id: 2,
      icon: "fb",
      title: "Likes",
      isIncrease: false,
      upDownCount: 2,
      count: 52,
    },
    {
      id: 3,
      icon: "ig",
      title: "Likes",
      isIncrease: true,
      upDownCount: 2257,
      count: 5462,
    },
    {
      id: 4,
      icon: "ig",
      title: "Profile Views",
      isIncrease: true,
      upDownCount: 1375,
      count: 52000,
    },
    {
      id: 5,
      icon: "twitter",
      title: "Retweet",
      isIncrease: true,
      upDownCount: 303,
      count: 117,
    },
    {
      id: 6,
      icon: "twitter",
      title: "Likes",
      isIncrease: true,
      upDownCount: 553,
      count: 507,
    },
    {
      id: 7,
      icon: "youtube",
      title: "Likes",
      isIncrease: false,
      upDownCount: 19,
      count: 107,
    },
    {
      id: 8,
      icon: "youtube",
      title: "Profile Views",
      isIncrease: false,
      upDownCount: 12,
      count: 1407,
    },
  ]);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleButton = () => setIsDarkMode(!isDarkMode);
  return (
    <ContainerApp isDarkMode={isDarkMode}>
      <HeaderContainer>
        <HeaderContainerLeft>
          <h1>Social Media Dashboard</h1>
          <h5>Total Followers: 23,004</h5>
        </HeaderContainerLeft>
        <HeaderContainerRight onClick={toggleButton}>
          <span>Dark Mode</span>
          {isDarkMode ? (
            <IconToggleOn height="40px" width="50px" />
          ) : (
            <IconToggleOff height="40px" width="50px" />
          )}
        </HeaderContainerRight>
      </HeaderContainer>
      <ContainerCard>
        {socialAccount.map((value) => (
          <CardSocial key={value.id} {...value} />
        ))}
      </ContainerCard>
      <h2>Overview - Today</h2>
      <ContainerCard>
        {staticCount.map((value) => (
          <CardCount key={value.id} {...value} />
        ))}
      </ContainerCard>
    </ContainerApp>
  );
}

export default App;
