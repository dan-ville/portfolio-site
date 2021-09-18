import React, { useContext, useState } from "react";
import ThemePickerIcon from "./ThemePicker";
import { themes, ThemeType } from "../../../theme/theme";

import { ToggleWrapper, Dropdown } from "./styled";
import { AppContext } from "../../../App";


const ThemeOptions = () => {
  const { globalTheme, setGlobalTheme } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  };

  const handleSetTheme = (theme: ThemeType) => {
    localStorage.setItem("globalTheme", JSON.stringify(theme));
    setGlobalTheme(theme);
  };

  return (
    <ToggleWrapper>
      <ThemePickerIcon theme={globalTheme} callback={handleOpen} />
      {open ? (
        <Dropdown>
          {themes.map((theme, index) => (
            <ThemePickerIcon
              key={index}
              theme={theme}
              callback={() => handleSetTheme(theme)}
            />
          ))}
        </Dropdown>
      ) : null}
    </ToggleWrapper>
  );
};

export default ThemeOptions;
