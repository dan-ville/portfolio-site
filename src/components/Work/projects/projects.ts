import testImgY from "../../../assets/img/testImgY.jpg"
import karis from "../../../assets/img/karis.png"
import b2b from "../../../assets/img/b2b.png"
import anagrammer from "../../../assets/img/anagrammer.png"

interface Project {
  heading: string
  description: string
  src: string
  url: string
  index?: number
}

const projectsDB: Project[] = [
  {
    heading: "One2Trip",
    description: `A multi-service application built for Vision Travel to give their salespeople a one-stop-shop app for making final sales in tourism.`,
    src: b2b,
    url: "/work/one2trip",
  },
  {
    heading: "Karis Tours",
    description: `A landing page for a fake company, Karis Tours, which offers tours in various cities of Portugal.`,
    src: karis,
    url: "https://dan-ville.github.io/karis-tours/",
  },
  // {
  //   heading: "The Vale",
  //   description: `Explore the epic fantasy universe of The Vale, download  a free preview of the book, and get to know the characters.`,
  //   src: testImgX,
  //   url: "https://dan-ville.github.io/karis-tours/",
  // },
  // {
  //   heading: "Trello Clone",
  //   description: `A guided project, courtesy of Maksim Ivanov and Alex Bespoyasov's Fullstack React with Typescript.`,
  //   src: testImgY,
  //   url: "https://dan-ville.github.io/karis-tours/",
  // },
  {
    heading: "Anagrammer",
    description: `If you need lots of anagrams for a word... look no further.`,
    src: anagrammer,
    url: "https://dan-ville.github.io/anagrammer/",
  },
  {
    heading: "Your idea",
    description: `Have an idea for a web app or website? Let's make it happen.`,
    src: testImgY,
    url: "/contact",
  },
]

export default projectsDB.map((project, index) => {
  return {
    ...project,
    index: index + 1,
  }
})
