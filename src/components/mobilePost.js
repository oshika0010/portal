import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const MobilePosts = (props) => {
    return (
        <MobilePostWrapper>
            <Img fixed={props.data.markdownRemark.frontmatter.topImage.childImageSharp.fixed}/>
            <PostTitle>{props.data.markdownRemark.frontmatter.title}</PostTitle>
            <HorizonLine/>
            <MarkDownWrapper dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}/>
        </MobilePostWrapper>
    )
}

const MobilePostWrapper = styled.div`
  margin-top: 8vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PostTitle = styled.h1`
  margin: 5vh 0 0;
`

const HorizonLine = styled.div`
  width: 80vw;
  border-bottom: 2px solid gray;
  
`

const MarkDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    width: 90vw;
    font-size: 1.4rem;
    color: gray;
    text-align: left;
    margin: 10px 0;
  }
  
  p {
    width: 85vw;
  }
`

export default MobilePosts