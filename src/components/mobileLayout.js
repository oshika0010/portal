import React from "react"
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
position: relative;
  width: 100vw;
  height: 100%
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default MobileLayout