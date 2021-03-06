import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  background: {
    primary: "#F6F6F6",
    light: {
      primary: "#F7F7F7",
      secondary: "#FFF",
      tertiary: "#F0F0F0",
    },
    dark: {
      primary: "#212121",
      secondary: "#1C1C1C",
    },
  },
  font: {
    primary: "#3F51B5",
    secondary: "#707070",
    tertiary: "#CCCCCC",
    black: "#2c3238",
    white: "#FFF",
  },
  breakpoints: {
    xxs: "0",
    xs: "360px",
    sm: "600px",
    md: "783px",
    lg: "1156px",
    xl: "1280px",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
