import { Link } from "react-router-dom";
import { Name } from "../../assets/Name/Name";
import ThemeOptions from "../../assets/UI/ThemeToggle/ThemeToggle";
import {
  HeaderStyled,
  HeaderWrapperStyled,
  NavStyled,
  NavLinkStyled,
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapperStyled>
        <Name />
        <NavStyled>
          <NavLinkStyled as={Link} to="/Work">
            Work
          </NavLinkStyled>
          {/* <NavLinkStyled as={Link} to="/Blog">
            Blog
          </NavLinkStyled> */}
          <NavLinkStyled as={Link} to="/About">
            About
          </NavLinkStyled>
          <ThemeOptions />
        </NavStyled>
      </HeaderWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
