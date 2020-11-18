import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import MobileLayout from "../components/mobileLayout"
import PCLayout from "../components/pcLayout"
import Footer from "../components/footer"
import MainPage from "../components/mainPage"
import {ParallaxProvider} from "react-scroll-parallax/cjs"
import {Parallax} from "react-parallax"

const Home = () => {
    return (
        <ParallaxProvider>
            <MediaQuery query="(min-width: 767px)">
                <BlogWrapper>
                    <PCLayout>
                        パソコン
                    </PCLayout>
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
        </ParallaxProvider>
    )
}

const BlogWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

`

const Head = styled.h1`
  z-index: 500;
  margin-top: 50vh;
  height: 50vh;
  width: 50vw;
`

export default Home
