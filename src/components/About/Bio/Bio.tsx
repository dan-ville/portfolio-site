import { useState } from "react"
import { StyledBio, StyledForm, StyledFormHint, Select } from "./Bio.styles"
import { BioOptions } from "./bioOptions"

type ChooseBioLengthProps = {
  setActiveOption: React.Dispatch<React.SetStateAction<string>>
}

const ChooseBioLength = ({ setActiveOption }: ChooseBioLengthProps) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setActiveOption(value)
  }
  return (
    <>
      <StyledFormHint>adjust bio length</StyledFormHint>
      <StyledForm>
        <Select name="bioOptions" onChange={onChange}>
          {BioOptions.map(({ option }) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </StyledForm>
    </>
  )
}

const Bio = () => {
  const [activeOption, setActiveOption] = useState<string>("Pick-up Line")

  return (
    <>
      <ChooseBioLength setActiveOption={setActiveOption} />
      <StyledBio>
        {BioOptions?.find((x) => x.option === activeOption)?.text}
      </StyledBio>
    </>
  )
}

export default Bio
