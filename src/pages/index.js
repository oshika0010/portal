import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import MobileLayout from "../components/mobileLayout"
import PCLayout from "../components/pcLayout"
import Footer from "../components/footer"
import MainPage from "../components/mainPage"
import {ParallaxProvider} from "react-scroll-parallax"

export default function Home() {
    return (
        <React.Fragment>
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
                        <ParallaxProvider>
                            <MainPage/>
                        </ParallaxProvider>
                    </MobileLayout>
                </BlogWrapper>
            </MediaQuery>
        </React.Fragment>
    )
}

const BlogWrapper = styled.div`
  width: 100%;
  height: 100%;

`
