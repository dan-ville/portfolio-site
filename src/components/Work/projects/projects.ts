import testImgX from "../../../assets/img/testImgX.jpg"
import testImgY from "../../../assets/img/testImgY.jpg"
import karis from "../../../assets/img/karis.png"
import b2b from "../../../assets/img/b2b.png"

interface Project {
  heading: string
  description: string
  src: string
  url: string
  index: number
}

const projectsDB: Project[] = [
  {
    index: 1,
    heading: "One2Trip",
    description: `A multi-service application built for Vision Travel to give their salespeople a one-stop-shop app for making final sales in tourism.`,
    src: b2b,
    url: "/work/one2trip",
  },
  {
    index: 2,
    heading: "Karis Tours",
    description: `A landing page for a fake company, Karis Tours, which offers tours in various cities of Portugal.`,
    src: karis,
    url: "https://dan-ville.github.io/karis-tours/",
  },
  {
    index: 3,
    heading: "Project X",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgX,
    url: "https://dan-ville.github.io/karis-tours/",
  },
  {
    index: 4,
    heading: "Project Y",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgY,
    url: "https://dan-ville.github.io/karis-tours/",
  },
  {
    index: 5,
    heading: "Project X",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgX,
    url: "https://dan-ville.github.io/karis-tours/",
  },
  {
    index: 6,
    heading: "Project Y",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgY,
    url: "https://dan-ville.github.io/karis-tours/",
  },
]

export default projectsDB
