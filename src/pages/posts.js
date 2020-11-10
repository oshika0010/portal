import React from "react"
import {graphql, Link} from "gatsby"
import MediaQuery from "react-responsive"
import MobileLayout from "../components/mobileLayout"
import PCLayout from "../components/pcLayout"

const PostsTerminal= ({data}) => {
    return (
        <React.Fragment>
            <MediaQuery query="(min-width: 767px)">
                    <PCLayout>
                        {data.allMarkdownRemark.nodes.map(node => (
                            <div key={node.id}>
                                <Link to={node.fields.slug}>
                                    <h2>{node.frontmatter.title}</h2>
                                </Link>
                                <p>{node.frontmatter.date}</p>
                            </div>
                        ))}
                    </PCLayout>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
                    <MobileLayout>
                        {data.allMarkdownRemark.nodes.map(node => (
                            <div key={node.id}>
                                <Link to={node.fields.slug}>
                                    <h2>{node.frontmatter.title}</h2>
                                </Link>
                                <p>{node.frontmatter.date}</p>
                            </div>
                        ))}
                    </MobileLayout>
            </MediaQuery>
        </React.Fragment>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    date
                    title
                }
            }
        }
    }
`

export default PostsTerminal