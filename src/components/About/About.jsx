import { useState, useContext } from "react";
import { StyledTitle, PageContent } from "../Layout/Layout";
import { ThemeContext } from "styled-components";
import profilePic from "../../assets/img/profilePic.jpg";
import {
  StyledProfileCard,
  StyledCardHeader,
  StyledHeaderIcon,
  StyledProfilePic,
  StyledTabPane,
  StyledTabWrapper,
  StyledTab,
  StyledActivetab,
} from "./About.styles";

import Skills from "./Skills/Skills";
import Specs from "./Specs/Specs";
import Bio from "./Bio/Bio";

const About = () => {
  return (
    <PageContent>
      <StyledTitle>About</StyledTitle>
      <StyledProfileCard>
        <StyledCardHeader>
          <StyledHeaderIcon>
            <StyledProfilePic alt="me" src={profilePic} />
          </StyledHeaderIcon>
        </StyledCardHeader>
        <TabPane />
      </StyledProfileCard>
    </PageContent>
  );
};

const tabs = [
  {
    title: "Skills",
    JSX: <Skills />,
  },
  {
    title: "Specs",
    JSX: <Specs />,
  },
  {
    title: "Bio",
    JSX: <Bio />
  }
];

const TabPane = () => {
  const [activeTab, setActiveTab] = useState(<Skills />);
  const theme = useContext(ThemeContext);

  const Tab = (props) => {
    const isActive = props.title === activeTab.type.name;
    const borderStyle = isActive
      ? ""
      : { borderBottom: `2px solid ${theme.bg.lift}` };  

    return <StyledTab {...props} style={{...borderStyle}}>{props.title}</StyledTab>;
  };

  const handleClick = (e) => {
    const tabClicked = e.target.title;
    const tabComponent = tabs.filter((tab) => tab.title === tabClicked)[0];
    const { JSX } = tabComponent;
    setActiveTab(JSX);
  };

  return (
    <StyledTabPane>
      <StyledTabWrapper>
        {tabs.map((tab) => (
          <Tab
            title={tab.title}
            key={tab.title}
            onClick={(e) => handleClick(e)}
          />
        ))}
      </StyledTabWrapper>
      <StyledActivetab>{activeTab}</StyledActivetab>
    </StyledTabPane>
  );
};

export default About;