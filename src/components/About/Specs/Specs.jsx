import { StyledSub } from "../About.styles";
import { StyledSpec, SpecHeading } from "./Specs.styles";

const Specs = () => {
  const specs = {
    Make: "Hispanic",
    Model: "Caucasian, Male, 5'6\"",
    Fuel: "Cold Brew: STōK Un-Sweet, Black",
  };

  return (
    <>
      <StyledSub>Specs</StyledSub>
      {Object.entries(specs).map((spec) => (
        <StyledSpec key={spec[0]}>
          <SpecHeading>{spec[0].toUpperCase()}</SpecHeading>
          <p>{spec[1]}</p>
        </StyledSpec>
      ))}
    </>
  );
};

export default Specs;
