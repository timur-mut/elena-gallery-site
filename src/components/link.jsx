import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const StyledTransitionLink = styled(TransitionLink)`
  color: #000000;
  text-decoration: unset;
`

const DisabledLink = styled.span`
  color: #606060;
`

export function Link({ children, style, to }) {
  if (to !== undefined)
  return (
    <StyledTransitionLink to={to} exit={{ length: 0.5 }} entry={{ delay: 0.5 }} style={style}>
      {children}
    </StyledTransitionLink>
  )
  else
    return (
      <DisabledLink>
        {children}
      </DisabledLink>
    )
}

const StyledAniLink = styled(AniLink)`
  color: #000000;
  text-decoration: unset;
`

export function SwipeLink({ children, to, direction }) {
  return (
    <StyledAniLink swipe direction={direction} top="entry" to={to}>
      {children}
    </StyledAniLink>
  )
}
