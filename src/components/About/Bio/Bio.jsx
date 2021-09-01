import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { StyledSub } from "../About.styles";
import {
  StyledBio,
  StyledForm,
  StyledFormHint,
  StyledLabel,
} from "./Bio.styles";
import { BioOptions } from "./bioOptions";

const ChooseBioLength = ({ theme, bioOption, setBioOption }) => {
  const handleClick = (e) => {
    const selected = BioOptions.filter(
      (option) => option.id === e.target.id
    )[0];
    setBioOption(selected);
  };

  const activeOptionStyle = {
    color: `${theme.text.main}`,
    backgroundColor: `${theme.bg.lift}`,
  };

  return (
    <>
      <StyledFormHint>adjust bio length</StyledFormHint>
      <StyledForm>
        {BioOptions.map((x) => (
          <StyledLabel
            key={x.id}
            id={x.id}
            onClick={(e) => handleClick(e)}
            style={x.id === bioOption.id ? { ...activeOptionStyle } : null}
          >
            {x.id}
          </StyledLabel>
        ))}
      </StyledForm>
    </>
  );
};

const Bio = () => {
  const [bioOption, setBioOption] = useState(BioOptions[0]);
  const theme = useContext(ThemeContext);

  return (
    <>
      <StyledSub>Bio</StyledSub>
      <ChooseBioLength
        theme={theme}
        bioOption={bioOption}
        setBioOption={setBioOption}
      />
      <StyledBio>{bioOption.value}</StyledBio>
    </>
  );
};

export default Bio;
