import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MediaQuery from "react-responsive"
import MobileLayout from "../components/mobileLayout"
import PCLayout from "../components/pcLayout"

export default function Post({ data }) {
    return (
        <React.Fragment>
            <MediaQuery query="(min-width: 767px)">
                    <PCLayout>
                        <Img fixed={data.markdownRemark.frontmatter.topImage.childImageSharp.fixed}/>
                        <h1>{data.markdownRemark.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    </PCLayout>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
                    <MobileLayout>
                        <Img fixed={data.markdownRemark.frontmatter.topImage.childImageSharp.fixed}/>
                        <h1>{data.markdownRemark.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    </MobileLayout>
            </MediaQuery>
        </React.Fragment>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                topImage {
                    childImageSharp {
                        fixed(width: 700){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`