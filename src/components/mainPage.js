import React from "react"
import styled from "styled-components"
import Hero from "./hero"
import RecentPages from "./recentPages"

const MainPage = () => {

    return (
        <MainPageContainer>
            <Hero/>
            <Triangle/>
            <RecentPages/>
        </MainPageContainer>
    )
}

const MainPageContainer = styled.div`
  display: flex;
  margin-top: 8vh;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.2rem;
  overflow-y: scroll;
  overflow-x: hidden;
`

const Triangle = styled.div`
  width: 100vw;
  height: 200px;
  background:linear-gradient(to bottom right, transparent 60%, wheat 50%) top left / 100% 50% no-repeat,
    linear-gradient(to top right, transparent 60%, wheat 50%) bottom left / 100% 50% no-repeat;
`

export default MainPage

