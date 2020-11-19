import React from "react"
import styled from "styled-components"
import PCHeader from "./pcHeader"

const PCLayout = (props) => {
    return (
        <BlogLayout>
            <PCHeader/>
            <ChildrenWrapper>
                {props.children}
            </ChildrenWrapper>
        </BlogLayout>
    )
}

const BlogLayout = styled.div`
  margin-top: 8vh;
  width: 100vw;
  height: 87vh;
  display: flex;
  flex-direction: row;
`
const ChildrenWrapper = styled.div`
  margin-left: 12vw;
  width: 88vw;
  height: 87vh;
`


export default PCLayout