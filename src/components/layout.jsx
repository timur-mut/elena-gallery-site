import React from "react"
import Helmet from "react-helmet/es/Helmet"
import styled, { css, createGlobalStyle } from "styled-components"

import RobotoRegular from "../fonts/Roboto-Regular.ttf"
import RobotoBold from "../fonts/Roboto-Bold.ttf"
import RobotoLight from "../fonts/Roboto-Light.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "Roboto";
      src: url(${RobotoRegular});
      font-weight: normal;
  }
  @font-face {
      font-family: "Roboto";
      src: url(${RobotoBold});
      font-weight: bold;
  }
  @font-face {
      font-family: "Roboto";
      src: url(${RobotoLight});
      font-weight: 100;
  }
  body {
    margin: 0;
  }
`

const Main = styled.main`
  font-family: "Roboto";
  background: #d2d2d2;
  ${({ isRootPage }) =>
    isRootPage &&
    css`
      background: repeating-linear-gradient(
        -45deg,
        rgb(0, 0, 0) 0%,
        rgb(0, 0, 0) 20%,
        #d2d2d2 20%,
        #d2d2d2 80%,
        rgb(255, 255, 255) 80%,
        rgb(255, 255, 255) 100%
      );
    `}
`

const Layout = props => {
  const { isRootPage, children } = props
  return (
    <>
      <Helmet title="Lena web gallery" defer={false} />
      <GlobalStyle />
      <Main isRootPage={isRootPage}>{children}</Main>
    </>
  )
}

export default Layout
