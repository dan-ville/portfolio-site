import { SkillsListObject } from "./skills"
import { StyledSub, StyledHeading, StyledItem } from "../About.styles"

type SkillsProps = {
  skills: SkillsListObject
}

const Skills = ({ skills }: SkillsProps) => {
  const { programming, devTools } = skills

  return (
    <>
      <StyledSub>Skills</StyledSub>
      <StyledHeading>Programming skills</StyledHeading>
      {programming.map((skill) => (
        <StyledItem>{skill}</StyledItem>
      ))}
      <StyledHeading>Programming tools</StyledHeading>
      {devTools.map((skill) => (
        <StyledItem>{skill}</StyledItem>
      ))}
    </>
  )
}

export default Skills
