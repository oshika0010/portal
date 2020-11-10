import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

const Layout = (props) => {
    return (
        <BlogLayout>
            <Header/>
            {props.children}
            <Footer/>
        </BlogLayout>
    )
}

const BlogLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`


export default Layout