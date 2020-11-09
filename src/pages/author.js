import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby";

const AuthorPage = ({data}) => {
    return (
        <div>
            <Layout>
            <h1>{data.site.siteMetadata.author}</h1>
            </Layout>
        </div>
    )
}

export const query = graphql`
     {
        site {
            siteMetadata {
                author
            }
        }
    }
`

export default AuthorPage