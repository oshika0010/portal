import React from "react"
import styled from "styled-components"
import Link from "gatsby"

const PCHeader = () => {
    return (
        <PCHeaderComponents>
            <LinkList>
                <li><Link to="/">
                    Top</Link></li>
                <li><Link to="/author">
                    Author</Link></li>
                <li><Link to="/posts">Posts</Link></li>
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