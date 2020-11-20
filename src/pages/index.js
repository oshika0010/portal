import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import MobileLayout from "../components/mobileLayout"
import Footer from "../components/footer"
import MainPage from "../components/mainPage"

const Home = () => {
    return (
        <div>
            <MediaQuery query="(min-width: 767px)">
                <BlogWrapper>
                    パソコン
                </BlogWrapper>
                <Footer/>
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
                <BlogWrapper>
                    <MobileLayout>
                        <MainPage/>
                    </MobileLayout>
                </BlogWrapper>
            </MediaQuery>
        </div>
    )
}

const BlogWrapper = styled.div`
  position: relative;
`

export default Home
