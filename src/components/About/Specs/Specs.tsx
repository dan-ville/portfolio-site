import { StyledSpec, SpecHeading } from "./Specs.styles"

const Specs = () => {
  const specs = {
    Make: "Colombian-American",
    Model: "Caucasian, Male, 5'6\"",
    Fuel: "A nice, medium-rare ribeye",
  }

  return (
    <>
      {Object.entries(specs).map((spec) => (
        <StyledSpec key={spec[0]}>
          <SpecHeading>{spec[0].toUpperCase()}</SpecHeading>
          <p>{spec[1]}</p>
        </StyledSpec>
      ))}
    </>
  )
}

export default Specs
