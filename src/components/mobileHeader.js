import {Link} from "gatsby"
import React, {useState} from "react"
import styled from "styled-components"
import {Transition} from "react-transition-group"
import MenuIcon from "../svg/menuIcon"
import {DefaultButton} from "../templates/defaultStyles"
import CloseIcon from "../svg/closeIcon"
import HomeIcon from "../svg/homeIcon"
import AuthorIcon from "../svg/authorIcon"
import PostsIcon from "../svg/postsIcon"

const MobileHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const attachMenuState = (() => {
        const afterState = !isOpenMenu
        setIsOpenMenu(afterState)
    })
    return (
        <MobileHeaderWrapper>
            <Transition in={isOpenMenu}>
                {(state) => (
                    <MobileMenu state={state}>
                        <CloseIconButton onClick={attachMenuState}
                                         state={state}>
                            <CloseIcon/>
                        </CloseIconButton>
                        <MobileMenuItem>
                            作ったサイトへ飛ぶ
                        </MobileMenuItem>
                    </MobileMenu>
                )}
            </Transition>
            <Transition in={isOpenMenu}>
                {(state) => (
                    <MenuIconButton onClick={attachMenuState}
                                    state={state}>
                        <MenuIcon/>
                    </MenuIconButton>
                )}
            </Transition>
            <LinkList>
                <li><Link to="/">
                    <HomeIcon/>
                </Link></li>
                <li><Link to="/author">
                    <AuthorIcon/>
                </Link></li>
                <li><Link to="/posts">
                    <PostsIcon/>
                </Link></li>
            </LinkList>
        </MobileHeaderWrapper>
    )
}

const MobileHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  z-index: 3;
`

const BaseMenu = styled.div`
  width: 80vw;
  height: 100vh;
  left: -80vw;
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const MobileMenu = styled(BaseMenu)`
  transition: 0.5s;
  transform: translateX(
    ${({state}) => (state === "entering" || state === "entered" ? 80 : 0)}vw
  ); 
  background-color: white;
`

const MobileMenuItem = styled(DefaultButton)`
  width: 60vw;
  height: 10vh;
  padding: 2px 30px;
  margin-top: 10vh;
  font-size: 1rem;
  color: gray;
  text-align: right;
`

const LinkList = styled.ul`
  list-style-type:none;
  margin-left: 25vw;
  margin-top: 0;
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
  position: absolute;
`

export default MobileHeader