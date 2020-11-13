import React, {useCallback, useState} from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {Transition} from "react-transition-group"
import MenuIcon from "../svg/menuIcon"
import {DefaultButton} from "../templates/defaultStyles"
import CloseIcon from "../svg/closeIcon"
import HomeIcon from "../svg/homeIcon"
import AuthorIcon from "../svg/authorIcon"
import PostsIcon from "../svg/postsIcon"

const MobileHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const atatchMenuState = useCallback(() => {
        const afterState = !isOpenMenu
        setIsOpenMenu(afterState)
    })
    return (
        <header>
            <Transition in={isOpenMenu}>
                {(state) => (
                    <MobileMenu state={state}>
                        <CloseIconButton onClick={atatchMenuState}
                                         state={state}>
                            <CloseIcon/>
                        </CloseIconButton>
                    </MobileMenu>
                )}
            </Transition>
            <Transition in={isOpenMenu}>
                {(state) => (
                    <MenuIconButton onClick={atatchMenuState}
                                    state={state}>
                        <MenuIcon/>
                    </MenuIconButton>
                )}
            </Transition>
            <LinkList>
                <li><AniLink swipe
                             top="exit"
                             duration={1}
                             to="/">
                    <HomeIcon/>
                </AniLink></li>
                <li><AniLink swipe
                             top="exit"
                             duration={1}
                             to="/author">
                    <AuthorIcon/>
                </AniLink></li>
                <li><AniLink swipe
                             top="exit"
                             duration={1}
                             to="/posts">
                    <PostsIcon/>
                </AniLink></li>
            </LinkList>
        </header>
    )
}

const BaseMenu = styled.div`
  width: 80vw;
  height: 100vh;
  left: -80vw;
  top: 0;
  position: fixed;
`

const MobileMenu = styled(BaseMenu)`
  transition: 0.5s;
  transform: translateX(
    ${({state}) => (state === "entering" || state === "entered" ? 80 : 0)}vw
  ); 
  background-color: white;
`

const LinkList = styled.ul`
  list-style-type:none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  width: 50vw;
  justify-content: space-between;
  
   li {
      margin: 0; 
   }
`

const MenuIconButton = styled(DefaultButton)`
  position: absolute;
  top: 0;
  left: 0;
  transition-duration: 0.5s;
  transform: rotateX(
   ${({state}) => (state === "entering" || state === "entered" ? "90" : "0")}deg
  );
`

const CloseIconButton = styled(DefaultButton)`
  float: right;
  transition: 0.5s;
`

export default MobileHeader