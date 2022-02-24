export type skillList = string[]

export const programming: skillList = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Node",
  "Typescript",
  "SQL"
]

export const devTools: skillList = [
  "Visual Studio Code",
  "Git/Gitlab",
  "Postman",
  "Figma",
  "Photoshop/Gimp"
]

export type SkillsListObject = {
  programming: skillList
  devTools: skillList
}
const mySkills: SkillsListObject = {
  programming,
  devTools,
}

export default mySkills
