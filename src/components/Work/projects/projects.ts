import karis from "../../../assets/img/karis.png"
import b2b from "../../../assets/img/b2b.png"
import anagrammer from "../../../assets/img/anagrammer.png"
import bndsrvnt from "../../../assets/img/bndsrvnt.jpg"

interface Project {
  heading?: string
  description?: string
  src?: string
  url?: string
  index?: number
  github?: string
  closedSource?: boolean
}

const projectsDB: Project[] = [
  {
    heading: "One2Trip",
    description: `A multi-service application built for Vision Travel to give their salespeople a one-stop-shop app for making final sales in tourism.`,
    src: b2b,
    url: "/work/one2trip",
    closedSource: true,
  },
  {
    heading: "Karis Tours",
    description: `A landing page for a fake company, Karis Tours, which offers tours in various cities of Portugal.`,
    src: karis,
    url: "https://dan-ville.github.io/karis-tours/",
    github: "https://github.com/dan-ville/karis-tours",
  },
  {
    heading: "Anagrammer",
    description: `If you need lots of anagrams for a word... look no further.`,
    src: anagrammer,
    url: "https://dan-ville.github.io/anagrammer/",
    github: "https://github.com/dan-ville/anagrammer",
  },
  {
    heading: "BNDSRVNT",
    description: "A landing page for BNDSRVNT music.",
    src: bndsrvnt,
    url: "https://bndsrvnt.co/",
    github: "https://github.com/dan-ville/bndsrvnt",
  },
]

export default projectsDB.map((project, index) => {
  return {
    ...project,
    index: index + 1,
  }
})
