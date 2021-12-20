export type ThemeType = typeof theme 

export const theme = {
  bg: {
    base: "hsl(200, 30%, 5%)",
    lift: "hsl(200, 20%, 20%)",
    negative: "hsl(200, 20%, 90%)",
  },
  text: {
    main: "hsl(0, 0%, 85%)",
    negative: "hsl(0, 0%, 15%)",
  },
  border: "hsl(0, 0%, 85%)",
  accent: "hsl(200, 75%, 38%)",
  boxShadow: "hsl(200, 20%, 20%)",
};
