import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "../components/link"
import Menu from "../components/menu"
import closeIcon from "../images/icons/close.svg"
import styled from "styled-components"
import { TransitionState } from "gatsby-plugin-transition-link"
import Layout from "../components/layout"
import posed, { PoseGroup } from "react-pose"

const GalleryBox = posed.ul({
  visible: {
    delayChildren: 300,
    staggerChildren: 50,
  },
  hidden: { delay: 500 },
})
const FadeBox = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
})

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1256px auto;
  @media (max-width: 1400px) {
    grid-template-columns: auto 924px auto;
  }
  @media (max-width: 1100px) {
    grid-template-columns: auto 592px auto;
  }
  @media (max-width: 750px) {
    grid-template-columns: auto 272px auto;
  }
`
const SidePanel = styled(FadeBox)`
  display: flex;
  justify-content: center;
`
const Gallery = styled(GalleryBox)`
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  justify-content: center;
  column-gap: 60px;
  row-gap: 60px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Thumbprint = styled(FadeBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 260px;
  width: 260px;
  outline: white 4px solid;
`
const CloseButton = styled(FadeBox)`
  position: fixed;
  top: 20px;
  right: 20px;
`

export default ({
  data: {
    allIlluminatorDataJson: { nodes },
  },
}) => {
  return (
    <Layout>
      <Container>
        <TransitionState>
          {({ mount, transitionStatus }) => {
            const pose = mount ? "visible" : "hidden"
            return (
              <PoseGroup pose={pose}>
                <SidePanel key="leftPanel">
                  <Menu isSideMenu selected={"illuminator"} />
                </SidePanel>
                <Gallery key="gallery">
                  {nodes
                    .filter(node => node.firstImage)
                    .map(node => (
                      <Thumbprint pose={pose} key={node.firstImage.id}>
                        <Link to={"illuminator/" + node.name}>
                          <Img style={{display: "block"}} fixed={node.firstImage.fixed} />
                        </Link>
                      </Thumbprint>
                    ))}
                </Gallery>
                <SidePanel key="rightPanel"></SidePanel>
                <CloseButton key="closeButton">
                  <Link to={"/"}>
                    <img alt="languageIcon" src={closeIcon} />
                  </Link>
                </CloseButton>
              </PoseGroup>
            )
          }}
        </TransitionState>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query allIlluminator {
    allIlluminatorDataJson {
      nodes {
        name
        firstImage {
          fixed(height: 250, width: 250, cropFocus: CENTER, fit: INSIDE) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
