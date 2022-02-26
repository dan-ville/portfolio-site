import { useState, useContext } from "react"
import { PageContent } from "../Layout/Layout"
import { ThemeContext } from "styled-components"
import profilePic from "../../assets/img/profilePic.jpg"
import {
  StyledProfileCard,
  StyledCardHeader,
  StyledHeaderIcon,
  StyledProfilePic,
  StyledTabPane,
  StyledTabWrapper,
  StyledTab,
  StyledActivetab,
  StyledContactInfo,
} from "./About.styles"

import Skills from "./Skills/Skills"
import Specs from "./Specs/Specs"
import Bio from "./Bio/Bio"
import mySkills from "./Skills/skills"
import SocialLinks from "../../assets/UI/SocialLinks"
import StyledLink from "../../assets/UI/Link"
import { NavLinkStyled } from "../Header/Header.styles"
import { Link } from "react-router-dom"

const components = [<Skills skills={mySkills} />, <Specs />, <Bio />]

type TabListItem = {
  index: number
  text: string
}
const tabs: TabListItem[] = [
  { index: 0, text: "Skills" },
  { index: 1, text: "Specs" },
  { index: 2, text: "Bio" },
]

type TabProps = {
  index: number
  text: string
  setActiveTabKey: React.Dispatch<React.SetStateAction<number>>
  isActive: boolean
}

const Tab = ({ text, setActiveTabKey, isActive, index }: TabProps) => {
  const theme = useContext(ThemeContext)

  const borderStyle = isActive
    ? null
    : { borderBottom: `2px solid ${theme.bg.lift}` }

  return (
    <StyledTab
      onClick={() => setActiveTabKey(index)}
      style={{ ...borderStyle }}
    >
      {text}
    </StyledTab>
  )
}

type TabPaneProps = {
  tabList: TabListItem[]
  components: React.ReactNode[]
}
const TabPane = ({ tabList, components }: TabPaneProps) => {
  const [activeTabKey, setActiveTabKey] = useState(0)

  return (
    <StyledTabPane>
      <StyledTabWrapper>
        {tabList.map((tab, index) => (
          <Tab
            key={index}
            index={index}
            setActiveTabKey={setActiveTabKey}
            text={tab.text}
            isActive={index === activeTabKey}
          />
        ))}
      </StyledTabWrapper>
      <StyledActivetab>{components[activeTabKey]}</StyledActivetab>
    </StyledTabPane>
  )
}

const About = () => {
  return (
    <PageContent>
      <StyledProfileCard>
        <StyledCardHeader>
          <StyledHeaderIcon>
            <StyledProfilePic alt="me" src={profilePic} />
          </StyledHeaderIcon>
          <StyledContactInfo>
            <StyledLink size="small" text="d.villegas@visiontravel.net" />
            <StyledLink size="small" text="+1-786-483-5337" />
            <SocialLinks />
          </StyledContactInfo>
        </StyledCardHeader>
        <TabPane tabList={tabs} components={components} />
      </StyledProfileCard>
    </PageContent>
  )
}

export default About
