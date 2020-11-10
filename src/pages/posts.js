import React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby";

const PostsTerminal= ({data}) => {
    return (
        <div>
            <Layout>
                {data.allMarkdownRemark.nodes.map(node => (
                    <div key={node.id}>
                        <Link to={node.fields.slug}>
                            <h2>{node.frontmatter.title}</h2>
                        </Link>
                        <p>{node.frontmatter.date}</p>
                    </div>
                ))}
            </Layout>
        </div>
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