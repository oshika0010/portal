import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <header>
            <h2>{data.site.siteMetadata.title}</h2>
            <nav>
                <ul>
                    <li><Link to="/">Top</Link></li>
                    <li><Link to="/author">Author</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header