import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import MobileLayout from "../components/mobileLayout"
import PCLayout from "../components/pcLayout"
import Footer from "../components/footer";

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

                    </MobileLayout>
                </BlogWrapper>
                <Footer/>
            </MediaQuery>
        </React.Fragment>
    )
}

const BlogWrapper = styled.div`
  width: 100%;
  height: 100%;

`
