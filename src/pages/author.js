import React from "react"
import MediaQuery from "react-responsive"
import MobileLayout from "../components/mobileLayout"
import PCLayout from "../components/pcLayout"
import {graphql} from "gatsby";

const AuthorPage = ({data}) => {
    return (
        <React.Fragment>
            <MediaQuery query="(min-width: 767px)">
                    <PCLayout>
                        <h1>{data.site.siteMetadata.author}</h1>
                    </PCLayout>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
                    <MobileLayout>
                        <h1>{data.site.siteMetadata.author}</h1>
                    </MobileLayout>
            </MediaQuery>
        </React.Fragment>
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