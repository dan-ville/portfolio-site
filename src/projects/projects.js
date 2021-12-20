import testImgX from "../assets/img/testImgX.jpg";
import testImgY from "../assets/img/testImgY.jpg";
import karis from "../assets/img/karis.png";

const projectsDB = [
  {
    heading: "Karis Tours",
    description: `A landing page for a fake company, Karis Tours, which offers tours in various cities of Portugal.`,
    src: karis,
    url: "https://dan-ville.github.io/karis-tours/",
  },
  {
    heading: "Project Y",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgY,
  },
  {
    heading: "Project X",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgX,
  },
  {
    heading: "Project Y",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgY,
  },
  {
    heading: "Project X",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgX,
  },
  {
    heading: "Project Y",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, velit, perferendis magni aliquid molestias cum accusantium sit quidem consequuntur iure voluptas fugiat sed est tempora nesciunt doloremque sapiente. Placeat.`,
    src: testImgY,
  },
];

const projects = projectsDB.map((project, index) => {
  return { index: index + 1, ...project };
});

export default projects;
