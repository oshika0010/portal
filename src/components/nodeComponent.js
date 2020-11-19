import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {Link} from "gatsby"
import {useInView} from "react-intersection-observer"

const NodeComponent = (props) => {
    const {ref, inView} = useInView({
        threshold: 0,
    })

    return (
        <NodeComponentWrapper
            ref={ref}
            inView={inView}>
            <Img fixed={props.node.frontmatter.topImage.childImageSharp.fixed}/>
            <NodeItemWrapper>
                <Link to={props.node.fields.slug}>
                    <ArticleTitle>{props.node.frontmatter.title}</ArticleTitle>
                </Link>
                <ArticleDate>{props.node.frontmatter.date}</ArticleDate>
            </NodeItemWrapper>
        </NodeComponentWrapper>
    )
}

const NodeComponentWrapper = styled.div`
  margin-bottom: 20px;
  width: 70vw;
  height: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  transform: translateX(${(props) => (props.inView ? "0px" : "80vw")});
`

const NodeItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ArticleTitle = styled.h4`
  margin: 0;
`

const ArticleDate = styled.div`
  font-size: 0.8rem;
`


export default NodeComponent