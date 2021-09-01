import testImgX from "../../assets/img/testImgX.jpg";
import testImgY from "../../assets/img/testImgY.jpg";

const projectsDB = [
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
  return { index, ...project };
});

export default projects;
