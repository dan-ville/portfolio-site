import { webTechs, mediaTechs } from "./enums";
import { StyledSub } from "../About.styles";

const Skills = () => {
  function generateEmojiRating(rating) {
    if (rating > 9) {
      return "🔥 ".repeat(rating);
    } else if (rating > 7) {
      return "🤩 ".repeat(rating);
    } else if (rating > 4) {
      return "😘 ".repeat(rating);
    } else {
      return "🙂 ".repeat(rating);
    }
  }

  return (
    <>
      <StyledSub>Skills</StyledSub>
      <h3>Web Technologies</h3>
      <table>
        {webTechs.map((skill) => (
          <tr key={skill.name}>
            <td>{skill.name}</td>
            <td>{generateEmojiRating(skill.rating)}</td>
          </tr>
        ))}
      </table>
      <h3>Media Tools</h3>
      <table>
        {mediaTechs.map((skill) => (
          <tr key={skill.name}>
            <td>{skill.name}</td>
            <td>{generateEmojiRating(skill.rating)}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Skills;
