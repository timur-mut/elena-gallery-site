import React, { useState } from "react"
import Img from "gatsby-image"
import { Link, SwipeLink } from "./link"
import styled, { css } from "styled-components"
import { TransitionState } from "gatsby-plugin-transition-link"

import closeIcon from "../images/icons/close.svg"
import previousIcon from "../images/icons/previous.svg"
import nextIcon from "../images/icons/next.svg"
import Layout from "./layout"
import posed, { PoseGroup } from "react-pose"

const FadeBox = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
})

const Container = styled.div`
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  column-gap: 20px;
  grid-template-columns: 220px auto 220px;
  @media (max-width: 1100px) {
    grid-template-columns: auto 20rem;
    grid-template-rows: auto auto;
  }
  @media (max-width: 750px) {
    grid-template-columns: auto;
    grid-auto-rows: min-content auto;
  }
`
const Thumbprints = styled(FadeBox)`
  @media (max-width: 1100px) {
    grid-row: 2;
    flex-direction: row;
    width: unset;
    grid-column: 1 / span 2;
    margin-left: 0px;
  }
  @media (max-width: 750px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  margin-left: 20px;
`
const ThumbprintImage = styled.a`
  height: 200px;
  @media (max-width: 1100px) {
    margin-top: 20px;
    margin-left: 5px;
  }
  margin-top: 5px;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected &&
    css`
      outline: black solid 1px;
    `}
`
const SelectedImage = styled(FadeBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100vh;
  @media (max-width: 1100px) {
    max-height: calc(100vh - 240px);
  }
`
const Info = styled(FadeBox)`
  font-size: 0.9rem;
  line-height: 160%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;
  @media (max-width: 1100px) {
    max-height: calc(100vh - 240px);
  }
  @media (max-width: 750px) {
    justify-content: start;
    margin: 0 20px;
  }
`
const Title = styled.div`
  font-weight: bold;
`
const Description = styled.div``
const Size = styled.span`
  font-weight: 100;
`
const CloseButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`
const NextButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`
const PreviousButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 80px;
`

const IlluminatorComponent = props => {
  const data = props.data.illuminatorDataJson
  const [selectedImage, setSelectedImage] = useState(0)
  if (!data || !data.images) return null
  const formattedDescription = data.description
    .split(`\n\n`)
    .map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`)
    .join(``)
  return (
    <Layout>
      <Container>
        <TransitionState>
          {({ mount, transitionStatus }) => {
            const pose = mount ? "visible" : "hidden"
            return (
              <PoseGroup pose={pose}>
                <Thumbprints key="thumbprints">
                  {data.images.map((image, index) => {
                    return (
                      <ThumbprintImage
                        onClick={() => setSelectedImage(index)}
                        isSelected={index === selectedImage}
                        key={image.fixed.id}
                      >
                        <Img fixed={image.fixed} />
                      </ThumbprintImage>
                    )
                  })}
                </Thumbprints>
                <SelectedImage key="selectedImage">
                  <Img
                    imgStyle={{ objectFit: "contain" }}
                    fluid={data.images[selectedImage].fluid}
                  />
                </SelectedImage>
                <Info key="info">
                  <Title>
                    {data.title} {data.year} <Size>({data.size})</Size>
                  </Title>
                  <Description
                    dangerouslySetInnerHTML={{ __html: formattedDescription }}
                  />
                </Info>
                <CloseButton key="closeButton">
                  <Link to={"illuminator/"}>
                    <img alt="languageIcon" src={closeIcon} />
                  </Link>
                </CloseButton>
                <PreviousButton key="previousButton">
                  <SwipeLink
                    direction="left"
                    to={"illuminator/" + data.previousItemName}
                  >
                    <img alt="languageIcon" src={previousIcon} />
                  </SwipeLink>
                </PreviousButton>
                <NextButton key="nextButton">
                  <SwipeLink
                    direction="right"
                    to={"illuminator/" + data.nextItemName}
                  >
                    <img alt="languageIcon" src={nextIcon} />
                  </SwipeLink>
                </NextButton>
              </PoseGroup>
            )
          }}
        </TransitionState>
      </Container>
    </Layout>
  )
}

export default IlluminatorComponent

export const pageQuery = graphql`
  query PostQuery($name: String) {
    illuminatorDataJson(name: { eq: $name }) {
      name
      title
      size
      year
      description
      previousItemName
      nextItemName
      images {
        fixed(height: 200, width: 200, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
