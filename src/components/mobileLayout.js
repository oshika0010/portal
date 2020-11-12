import React from "react"
import Footer from "./footer"
import styled from "styled-components"
import MobileHeader from "./mobileHeader"

const MobileLayout = (props) => {
    return (
        <BlogLayout>
            <MobileHeader/>
            {props.children}
        </BlogLayout>
    )
}

const BlogLayout = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`


export default MobileLayout