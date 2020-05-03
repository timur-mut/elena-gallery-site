import React from "react"
import Menu from "../components/menu"
import Layout from "../components/layout"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"
import { TransitionState } from "gatsby-plugin-transition-link"

const transition = {
  type: "spring",
  stiffness: 80,
}
const LeftBox = posed.div({
  visible: {
    left: "-30vh",
    transition: transition,
  },
  hidden: {
    left: "-100vh",
    transition: transition,
  },
})
const RightBox = posed.div({
  visible: {
    left: "calc(100vw - 70vh)",
    transition: transition,
  },
  hidden: {
    left: "100vw",
    transition: transition,
  },
})
const PosedMenu = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
})

const StyledMenu = styled(PosedMenu)`
 z-index: 1;
`

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
const LeftTriangle = styled(LeftBox)`
  position: absolute;
  left: -100vh;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100vh 90vh 0 0;
  border-color: white transparent transparent transparent;
`
const RightTriangle = styled(RightBox)`
  z-index: 0;
  position: absolute;
  left: 100vh;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 100vh 90vh;
  border-color: transparent transparent black transparent;
`

function Index() {
  return (
    <Layout>
      <Container>
        <TransitionState>
          {({ mount, transitionStatus }) => {
            const pose = mount ? "visible" : "hidden"
            return (
              <PoseGroup pose={pose}>
                <StyledMenu key="menu">
                  <Menu />
                </StyledMenu>
                <LeftTriangle key="left" />
                <RightTriangle key="right" />
              </PoseGroup>
            )
          }}
        </TransitionState>
      </Container>
    </Layout>
  )
}

export default Index
