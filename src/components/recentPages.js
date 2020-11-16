import React from "react"
import styled from "styled-components"
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"

const RecentPages = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: {
                    fields: frontmatter___date,
                    order: DESC}) {
                    nodes {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            date
                            title
                            topImage {
                                childImageSharp {
                                    fixed(width: 100){
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    let recentNodes
    if (data.allMarkdownRemark.nodes.length < 3) {
        recentNodes = data.allMarkdownRemark.nodes
    } else {
        recentNodes = data.allMarkdownRemark.nodes.slice(2)
    }
    return (
        <RecentPagesWrapper>
            <h1>RecentPages</h1>
            {recentNodes.map(node => (
                <NodeComponent key={node.id}>
                    <Img fixed={node.frontmatter.topImage.childImageSharp.fixed}/>
                    <NodeItemWrapper>
                        <Link to={node.fields.slug}>
                            <ArticleTitle>{node.frontmatter.title}</ArticleTitle>
                        </Link>
                        <ArticleDate>{node.frontmatter.date}</ArticleDate>
                    </NodeItemWrapper>
                </NodeComponent>
            ))}
        </RecentPagesWrapper>
    )
}

const NodeItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ArticleDate = styled.div`
  font-size: 0.8rem;
`


const NodeComponent = styled.div`
  width: 80vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const RecentPagesWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ArticleTitle = styled.h4`
  margin: 0;
`

export default RecentPages