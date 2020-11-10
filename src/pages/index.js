import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import MediaQuery from "react-responsive";

export default function Home() {
    return (
        <div>
            <MediaQuery query="(min-width: 767px)">
                <BlogWrapper>
                    <Layout>
                        パソコン
                    </Layout>
                </BlogWrapper>
            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <BlogWrapper>
                    <Layout>
                        スマホ
                    </Layout>
                </BlogWrapper>
            </MediaQuery>
        </div>
    )
}

const BlogWrapper = styled.div`
  width: 100%;
  height: 100%;

`