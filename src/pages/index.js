import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {Link} from "gatsby"

export default function Home({data}) {
    return (
        <div>
            <Layout>
                <h1>Pages</h1>
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