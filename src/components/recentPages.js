import React from "react"
import styled from "styled-components"
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import {useInView} from "react-intersection-observer"
import NodeComponent from "./nodeComponent";

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
                                    fixed(width: 300){
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
                <NodeComponent key={node.id}
                               node={node}/>
            ))}
        </RecentPagesWrapper>
    )
}

const RecentPagesWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:linear-gradient(to bottom left, transparent 50%, wheat 50%) top left / 100% 20% no-repeat,
    linear-gradient(to top right, transparent 50%, wheat 50%) bottom left / 100% 20% no-repeat;

 `


export default RecentPages