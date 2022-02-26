import styled from "styled-components"

type LinkProps = {
  size?: "small" | "large"
  text?: string
}

const StyledLink = styled.p<LinkProps>`
  padding: 0.5em 0.8em;
  color: ${(props) => props.theme.text.main};
  background-color: ${(props) => props.theme.bg.lift};
  border: 2px solid ${(props) => props.theme.border};
  width: 100%;
  border-radius: 0.3em;
  text-align: center;
  font-size: ${(props) => (props.size === "large" ? "1rem" : "0.7rem")};
  font-weight: 500;
`

const Link = ({ size = "small", text = "" }: LinkProps) => {
  return <StyledLink size={size}>{text}</StyledLink>
}

export default Link
