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
  text-align: center;
  font-size: 1.2rem;
`

const Triangle = styled.div`
  width: 100vw;
  height: 200px;
  background:linear-gradient(to bottom right, transparent 60%, wheat 50%) top left / 100% 50% no-repeat,
    linear-gradient(to top right, transparent 60%, wheat 50%) bottom left / 100% 50% no-repeat;
`

const Div2 = styled.div`
  background-color: red;
  width: 70vw;
  height: 400px;
  position: relative;
`


// const MainPageWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 50vw 45vw;
//   grid-template-rows: 500px 400px 400px 600px;
// `
//
// const GridBox1 = styled.div`
//   grid-column: 1/2;
//   grid-row: 1/2;
//   background-color: black;
// `
//
// const GridBox2 = styled.div`
//   grid-column: 2/2;
//   grid-row: 3/4;
//   background-color: red;
// `
//
// const GridBox3 = styled.div`
//   grid-column: 1/2;
//   grid-row: 4/4;
//   background-color: blue;
// `

export default MainPage

