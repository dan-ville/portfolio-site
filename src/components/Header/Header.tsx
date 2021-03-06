import { Link } from "react-router-dom"
import { Name } from "../../assets/Name/Name"
import {
  HeaderStyled,
  HeaderWrapperStyled,
  NavStyled,
  NavLinkStyled,
} from "./Header.styles"

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapperStyled>
        <Name />
        <NavStyled>
          <NavLinkStyled as={Link} to="/Work">
            Work
          </NavLinkStyled>
          <NavLinkStyled as={Link} to="/Contact">
            Contact
          </NavLinkStyled>
          <NavLinkStyled as={Link} to="/About">
            About
          </NavLinkStyled>
        </NavStyled>
      </HeaderWrapperStyled>
    </HeaderStyled>
  )
}

export default Header
