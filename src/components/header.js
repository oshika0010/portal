import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <header>
            <h2>{data.site.siteMetadata.title}</h2>
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

export default Header