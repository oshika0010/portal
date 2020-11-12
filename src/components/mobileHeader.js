import React, {useCallback, useState} from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {Transition} from "react-transition-group"
import MenuIcon from "../svg/menuIcon";

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
                        <button onClick={atatchMenuState}>
                            {/*<MenuIcon/>*/}
                        </button>
                    </MobileMenu>
                )}
            </Transition>
            <button onClick={atatchMenuState}>
                {/*<MenuIcon/>*/}
            </button>
            <LinkList>
                <li><AniLink swipe
                             top="exit"
                             duration={1}
                             to="/">
                    Top</AniLink></li>
                <li><AniLink swipe
                             top="exit"
                             duration={1}
                             to="/author">
                    Author</AniLink></li>
                <li><AniLink swipe
                             top="exit"
                             duration={1}
                             to="/posts">Posts</AniLink></li>
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

export default MobileHeader