import React from "react"
import { Link } from "./link"
import styled, { css } from "styled-components"

const Menu = styled.div`
  z-index: 3;
  flex-flow: row;
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  flex-direction: column;
  ${({ isSideMenu }) =>
    isSideMenu &&
    css`
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
    `}
`
const MenuItem = styled.div`
  color: #606060;
  font-size: 1.5rem;
  margin: 20px;
  letter-spacing: 5px;
`
const Dot = styled.div`
  background-color: ${props => props.color};
  height: 15px;
  width: 15px;
  margin-right: 50px;
  border-radius: 50%;
  display: inline-block;
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 8px solid #d2d2d2;
      box-shadow: 0px 0px 0px 1px black;
      margin: -8px;
    `}
  ${({ isSideMenu }) =>
    isSideMenu &&
    css`
      margin-right: 0px;
    `}
`

export default function(props) {
  const { isSideMenu, selected } = props
  const menuItems = [
    { caption: "я есмь", color: "#ff00f5", path: undefined },
    { caption: "иллюминатор", color: "#9e00ff", path: "illuminator" },
    { caption: "кадры", color: "#0057ff", path: undefined },
    { caption: "акт", color: "#00ffff", path: undefined },
    { caption: "замыслы", color: "#14ff00", path: undefined },
    { caption: "слияния", color: "#faff00", path: undefined },
    { caption: "буквы", color: "#ffb800", path: undefined },
    { caption: "эндорфин", color: "#ff0000", path: undefined },
  ]
  return (
    <Menu isSideMenu={isSideMenu}>
      {menuItems.map((menuItem, index) => {
        return (
          <MenuItem key={index}>
            <Link to={menuItem.path && "/" + menuItem.path}>
              <Dot
                color={menuItem.color}
                isSideMenu={isSideMenu}
                isSelected={menuItem.path && menuItem.path === selected}
              />
              {!isSideMenu && menuItem.caption}
            </Link>
          </MenuItem>
        )
      })}
    </Menu>
  )
}
