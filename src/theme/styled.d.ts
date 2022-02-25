import "styled-components"
import ThemeType from "./theme"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    bg: {
      base: string
      lift: string
      negative: string
    }
    text: {
      main: string
      negative: string
    }
    border: string
    accent: string
    boxShadow: string
  }
}
