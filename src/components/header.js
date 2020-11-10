import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import styled from "styled-components"

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
                    <li><Link to="/">Top</Link></li>
                    <li><Link to="/author">Author</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
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