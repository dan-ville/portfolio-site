import { useContext, useEffect, useRef, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { AppContext } from "../../../App";
import ThemePickerIcon from "../../SVG/ThemePicker";
import { themes } from "../../../theme/theme";

const ToggleWrapper = styled.div`
  margin-left: 0.3rem;
  position: relative;
`;
const ThemeToggle = () => {
  const [open, setOpen] = useState(false);
  const theme = useContext(ThemeContext);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <ToggleWrapper>
      <ThemePickerIcon theme={theme} callback={handleOpen} />
      {open ? <ThemeOptions setOpen={setOpen} /> : null}
    </ToggleWrapper>
  );
};

const Dropdown = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bg.lift};
  top: 100%;
  left: -3px;
  padding: 0.2em;
  border-radius: 0.3em;
`;
const ThemeOptions = ({ setOpen }) => {
  const { setTheme } = useContext(AppContext);
  const dropdownRef = useRef();

  const handleSetTheme = (index) => {
    setTheme(themes[index]);
  };

  useEffect(() => {
    const close = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", close);

    return () => {
      document.removeEventListener("click", close);
    };
  });

  return (
    <Dropdown ref={dropdownRef}>
      {themes.map((theme, index) => (
        <ThemePickerIcon
          key={index}
          theme={theme}
          callback={() => handleSetTheme(index)}
        />
      ))}
    </Dropdown>
  );
};

export default ThemeToggle;
