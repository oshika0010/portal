import React from "react"
import styled from "styled-components"
import {useStaticQuery} from "gatsby"

const AuthorMainPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                    }
                }
            }
        `
    )
    return (
        <AuthorPageWrapper>

        </AuthorPageWrapper>
    )
}

const AuthorPageWrapper = styled.div``

export default AuthorMainPage