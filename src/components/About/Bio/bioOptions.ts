const pickUpLine = `How much does a polar bear weigh? Enough to break the ice. Hi, I'm Danny.`
const elevatorPitch = `My name is Danny and we should talk if you need a web app, some Netflix
    recommendations, or a medium-rare ribeye. I have just under two years of experience as a self-taught web developer and I love to learn new skills.`
const speedDate = `I'm a self-taught web developer and a lifetime Miami local. After
      graduating from the University of Miami, I was mostly involved in
      non-profit work until the COVID-19 quarantine, when I started to teach
      myself tech skills. My
      first love is web dev with the React/MERN stack and I'm just starting to learn back-end with NodeJS.`
const dinnerConvo = `I'm a self-taught web developer and a lifetime Miami local. After
      graduating from the University of Miami, I was mostly involved in
      non-profit work until the COVID-19 quarantine, when I started to teach
      myself tech skills. The hype of coding something from scratch that others
      could see and use drove me to pursue front-end development. My first love
      is web dev with the React/MERN stack. I'm curently figuring out how to build API's on the back-end with NodeJS and Express and expanding my knowledge by building fullstack React and Typescript projects. My other interests are
      powerlifting 🏋️‍♂️, photography 📸, graphic/illustrative design 🖌️, theology
      ✝️ and apologetics, and grilling 🔥`

type BioOption = {
  id: string
  value: string
}
export const BioOptions: BioOption[] = [
  {
    id: "Pick-up Line",
    value: pickUpLine,
  },
  {
    id: "Elevator Pitch",
    value: elevatorPitch,
  },
  {
    id: "Speed Date",
    value: speedDate,
  },
  {
    id: "Dinner Convo",
    value: dinnerConvo,
  },
]
