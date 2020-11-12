import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PCHeader = () => {
    return (
        <PCHeaderComponents>
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
        </PCHeaderComponents>
    )
}

const LinkList = styled.ul`
  list-style-type:none;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
   li {
      margin: 0; 
   }
`

const PCHeaderComponents = styled.div`
  height: 5vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 2px 4px gray;
`


export default PCHeader